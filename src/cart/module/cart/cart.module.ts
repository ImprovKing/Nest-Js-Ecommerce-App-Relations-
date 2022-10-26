import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from 'src/cart/controller/cart/cart.controller';
import { CartService } from 'src/cart/service/cart/cart.service';
import { CartEntity } from 'src/entites/cart.entity';
import { ProductEntity } from 'src/entites/product.entity';
import { Users } from 'src/entites/users.entity';
import { ProductsService } from 'src/products/products.service';

@Module({
    imports : [TypeOrmModule.forFeature([CartEntity , ProductEntity , Users ])] ,
    providers : [CartService , ProductsService ] ,
    controllers : [CartController ] 
})
export class CartModule {}
