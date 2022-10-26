import { Controller, Get, Post, UseGuards ,Request} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guard/jwt.guard';
import { LocalAuthGuard } from './auth/guard/local.guard';

@Controller()
export class AppController {
  
  constructor(
    private readonly appService: AppService ,
    private authService : AuthService
    ) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req ){
    return this.authService.login(req.user) ;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

 /* @UseGuards(LocalAuthGuard)
  @Post('/admin/login')
  async adminLogin(@Request() req){
    return this.authService.login(req.user) ;
  } */
}
