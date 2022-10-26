import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module'
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/module/order/order.module';
import { CartModule } from './cart/module/cart/cart.module';



@Module({
  imports : [
    TypeOrmModule.forRoot(config) ,
    UsersModule,
    ProductsModule ,
    AuthModule,
    CartModule ,
    OrderModule,
  ],
  
  controllers: [AppController ],
  providers: [AppService, ]
}) 
export class AppModule {}
