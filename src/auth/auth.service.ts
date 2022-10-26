import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

    constructor(
        private userService : UsersService ,
        private jwtService : JwtService
    ){}

    async validateuser(username : string , password : string):Promise<any>{
        const user = await this.userService.findOne(username) ;
        if(user){
            if(await bcrypt.compare(password , user.password)) {
                const { password , ...result } = user ;
                return result ;
            }
            return null ;
        }
        return null ;
    }

    //LOGIN WITH JWT PAYLOAD
    async login(user : any){
        const payload = { username : user.username , id : user.id , password : user.password , email : user.email , phonenumber : user.phonenumber , homeaddress : user.homeaddress }  ;
        return{
            access_token :this.jwtService.sign(payload) 
        }
    }
    
}
