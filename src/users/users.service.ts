import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { Users } from 'src/entites/users.entity';
import { CartEntity } from 'src/entites/cart.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository : Repository<Users>
  ){}
  
  async create(createUserDto: Users ):Promise<any> {
    const salt = await bcrypt.genSalt(10) ;
    const hash = await bcrypt.hash(createUserDto.password , salt);
    createUserDto.password = hash ;
    return await this.userRepository.save(createUserDto) ;
  }

  async findAll():Promise<Users[]> {
    return await this.userRepository.find() ;
  }

  async findOne(username: string) :Promise<Users>{
    return await this.userRepository.findOne({where : { username}}) ;
  }

  async update(id: string, updateUserDto: Users ) {
    return await this.userRepository.update(id , updateUserDto) ;
  }

  async remove(id: string) {
    return await this.userRepository.delete(id) ;
  }
}
