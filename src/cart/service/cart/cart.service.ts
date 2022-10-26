import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/entites/cart.entity';
import { ProductEntity } from 'src/entites/product.entity';
import { Users } from 'src/entites/users.entity';
import { ProductsService } from 'src/products/products.service';
import { DeleteResult, Repository } from 'typeorm';


@Injectable()
export class CartService {
    constructor(
    @InjectRepository(CartEntity)
    private cartRepository : Repository<CartEntity> ,
    @InjectRepository(Users)
    private userRepository : Repository<Users>,
    private productService : ProductsService ,
    ){}

    async addToCart(productId : number , quantity : number , user: string):Promise<any>{
        const cartItems = await this.cartRepository.find({ relations: ["item", 'user'] });
        const product = await this.productService.getOne(productId) ;
        const authUser = await this.userRepository.findOneBy({ username : user}) ;

        //confirm if the product exist in cart
        if(product){
            //confirm if the user has item in cart
            const cart = cartItems.filter(
                (item) => item.item.id === productId && item.user.username === user ,
            ) ;
            
            if(cart.length < 1 ){
                const newItem = this.cartRepository.create({
                    total : product.price * quantity , 
                    quantity ,
                    }) ;

                newItem.user = authUser ;
                newItem.item = product ;
                this.cartRepository.save(newItem) 

                return await this.cartRepository.save(newItem) ;
            }
            else{
                //Update the item quantity 
                const quantity = (cart[0].quantity +=1 ) ;
                const total = cart[0].total * quantity ;

                return await this.cartRepository.update(cart[0].id , { quantity , total } ) ;
            }
        }
        return null ;
    }

    async getItemsInCart(user : string  ):Promise<CartEntity[]>{
        const userCart = await this.cartRepository.find({
            relations : ["item" , 'user']
        }) ;
        return (await userCart).filter(item => item.user.username === user ) ;
    }

    async removeItem(productId : number ):Promise<DeleteResult>{
        const deleteItem = await this.cartRepository.delete(productId) ;
        return deleteItem ;
    }
}

