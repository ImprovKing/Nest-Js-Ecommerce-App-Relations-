import { TypeOrmModuleOptions } from "@nestjs/typeorm" ;
import { CartEntity } from "./entites/cart.entity";
import { OrderEntity } from "./entites/order.entity";
import { ProductEntity } from "./entites/product.entity";
import { Users } from "./entites/users.entity";

export const config: TypeOrmModuleOptions ={
    type : "postgres",
    host : "localhost",
    port : 5432,
    username : "postgres",
    password : "Alexander4",
    database :"main_laz_db",
    entities : [ Users , CartEntity , OrderEntity , ProductEntity ],
    synchronize : true ,
}