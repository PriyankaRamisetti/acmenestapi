import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/loginvalidate')
  @HttpCode(200)
  login(@Body() body) : string{
    return this.appService.validatelogin(body);
  }

  @Get('/plans')
  plans(){
    return this.appService.planslist();
  }

  @Post('/plandetails')
  plandetails(@Body() body){
    console.log(body);
   return this.appService.plandetails(body);
  }
}
