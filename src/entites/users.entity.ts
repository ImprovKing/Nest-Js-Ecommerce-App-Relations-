import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, OneToOne } from "typeorm"
import { CartEntity } from "./cart.entity"
import { OrderEntity } from "./order.entity"

@Entity("customers")
export class Users {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   username: string 

   @Column()
   password: string

   @Column()
   phonenumber : string

   @Column()
   homeaddress : string

   @Column()
   email : string

   @Column() 
   profilePic? : string ;

   @CreateDateColumn()
   createdAt : String

   access_token?: any ;

   @UpdateDateColumn()
   updtedAt : String

   @OneToMany(type => CartEntity, cart => cart.id)
   @JoinColumn()
   cart: CartEntity[]

   @OneToOne(type => OrderEntity, order => order.id)
   @JoinColumn()
   order : OrderEntity;
}