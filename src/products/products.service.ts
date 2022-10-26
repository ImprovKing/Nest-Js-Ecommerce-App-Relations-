import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entites/product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository : Repository<ProductEntity> ,
    ){}

    //CRUD MEthods

    async create(createEntity : ProductEntity ):Promise<any>{
        return await this.productRepository.save(createEntity) ;
    }

    async getAll():Promise<ProductEntity[]>{
        return this.productRepository.find() ;
    }

    async getByCategory(category : string):Promise<ProductEntity[]>{
        return this.productRepository.find({where : {category}}) ;
    }

    async getOne(id : number ):Promise<ProductEntity>{
        return this.productRepository.findOne({where : {id}}) ;
     }

    async update(id : number , updateEntity : ProductEntity):Promise<UpdateResult>{
        return await this.productRepository.update(id , updateEntity) ;
    }

    async delete(id : number):Promise<DeleteResult>{
        return this.productRepository.delete(id) ;
    }
}
