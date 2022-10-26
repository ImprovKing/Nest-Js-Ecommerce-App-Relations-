import { PrimaryGeneratedColumn , Entity , Column, CreateDateColumn, JoinColumn, OneToMany, UpdateDateColumn  } from "typeorm";
import { CartEntity } from "./cart.entity";

@Entity("Products")
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    name : string ;
    
    @Column()
    price : number ;

    @Column()
    quantity : number ;

    @Column()
    description : string ;

    @Column()
    category : string ;

    @Column()
    image : string ;

    @Column('text', {nullable : true , default : "L"})
    large : string ;

    @Column('text', {nullable : true , default : "S"})
    small : string ;

    @Column('text', {nullable : true , default : "M"})
    medium : string ;

    //colors
    @Column('text', {nullable : true , default : "white"})
    white : string ;

    @Column('text', {nullable : true , default : "black"})
    black: string ;

    @Column('text', {nullable : true , default : "red"})
    red : string ;

    @Column('text', {nullable : true , default : "pictureColor"})
    pictuColor : string ;

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updtedAt: String

    @OneToMany(type => CartEntity, cart => cart.id)
    @JoinColumn()
    cart: CartEntity[]
    
}
