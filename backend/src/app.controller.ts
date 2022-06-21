import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':keyword')
  search(@Param() param): Observable<any> {
    return this.appService.search(param.keyword);
  }
}


