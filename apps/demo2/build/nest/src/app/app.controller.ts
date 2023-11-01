import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // http://localhost:3333/api
  @Get()
  getData() {
    return this.appService.getData();
  }
}
