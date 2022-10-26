import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from 'src/cart/service/cart/cart.service';
import { CartEntity } from 'src/entites/cart.entity';
import { OrderEntity } from 'src/entites/order.entity';
import { ProductEntity } from 'src/entites/product.entity';
import { Users } from 'src/entites/users.entity';
import { OrderController } from 'src/order/controller/order/order.controller';
import { OrderService } from 'src/order/service/order/order.service';
import { ProductsService } from 'src/products/products.service';

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity, Users])],
    controllers: [OrderController],
    providers: [OrderService, CartService, ProductsService]
})
export class OrderModule {}
