import { Body, Controller, Post, UseGuards , Request, Delete, Get, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { CartService } from 'src/cart/service/cart/cart.service';
import { CartEntity } from 'src/entites/cart.entity';
import { DeleteResult } from 'typeorm';

@Controller('cart')
export class CartController {
    constructor( private cartService : CartService ){}

    @UseGuards(JwtAuthGuard)
    @Post('add-to-cart')
    async AddToCart(@Body() body ,  @Request() req): Promise<void> {
        const { productId , quantity } = body
        return await this.cartService.addToCart(productId, quantity, req.user.username);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getItemsInCart(@Request() req): Promise<CartEntity[]> {
        return await this.cartService.getItemsInCart(req.user.username) ;
    }
 
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteItemInCart(@Param() id : number , @Request() req ):Promise<DeleteResult>{
     return this.cartService.removeItem(id);
    }
}
