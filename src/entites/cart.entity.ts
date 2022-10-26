import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { ProductEntity } from "./product.entity"
import { Users } from "./users.entity"


@Entity("shopcart")
export class CartEntity {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   total: number

   @Column()
   quantity: number
  
   @ManyToOne(type => ProductEntity, order => order.id)
   @JoinColumn()
   item: ProductEntity

   @ManyToOne(type => Users, user => user.username)
   @JoinColumn()
   user: Users
}