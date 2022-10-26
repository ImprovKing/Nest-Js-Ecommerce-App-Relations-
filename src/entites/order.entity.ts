import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, Column } from "typeorm";
import { ProductEntity } from "./product.entity";
import { Users } from "./users.entity";

@Entity("orders")
export class OrderEntity {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @OneToMany(type => ProductEntity, item => item.id)
   items: ProductEntity[];

   @OneToOne(type => Users , user => user.username)
   @JoinColumn()
   user : Users ;

   @Column()
   subTotal: number

   @Column({ default: false })
   pending: boolean

}
