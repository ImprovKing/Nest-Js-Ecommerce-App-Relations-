import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductEntity } from 'src/entites/product.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService : ProductsService){}

    //controllers 

    @Post()
    create(@Body() createEntity : ProductEntity ):Promise<any>{
        return this.productService.create(createEntity) ;
    }

    @Get()
    findAll():Promise<ProductEntity[]>{
        return this.productService.getAll() ;
    }
    @Get(":category")
    getByCategory(@Param('category') category : string ):Promise<ProductEntity[]>{
        return this.productService.getByCategory(category) ;
    }

    @Get(":id")
    findOne(@Param('id') id : number ):Promise<ProductEntity>{
        return this.productService.getOne(id) ;
    }

    @Patch(":id")
    update(@Param() id : number , @Body() updateEntity : ProductEntity):Promise<UpdateResult>{
        return this.productService.update(id , updateEntity) ;
    }

    @Delete(":id")
    delete(@Param() id : number ):Promise<DeleteResult>{
        return this.productService.delete(id) ;
    }
}
