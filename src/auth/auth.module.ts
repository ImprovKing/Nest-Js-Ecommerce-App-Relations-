import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entites/users.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constant/constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStategy } from './strategies/local.strategy';

@Module({
    imports: [
        UsersModule,
         PassportModule,
         JwtModule.register({
             secret : jwtConstants.secret,
             signOptions : { expiresIn : '3600s'} ,
         }),
         TypeOrmModule.forFeature([Users]),
      ],
    providers : [AuthService ,LocalStategy , JwtStrategy] ,
    exports : [AuthService]
})
export class AuthModule {}
