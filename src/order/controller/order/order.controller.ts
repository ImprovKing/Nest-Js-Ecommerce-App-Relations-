import { Controller, Get, Post, UseGuards , Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { OrderEntity } from 'src/entites/order.entity';
import { OrderService } from 'src/order/service/order/order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }


    @UseGuards(JwtAuthGuard)
    @Post()
    async order(@Request() req): Promise<any> {
        return this.orderService.order(req.user.username)
    }
 
    @UseGuards(JwtAuthGuard)
    @Get()
    async getOrders(@Request() req): Promise<OrderEntity[]> {
        return await this.orderService.getOrders(req.user.username)
    }
}
