import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs'
import {JSDOM} from 'jsdom'

@Injectable()
export class AppService {
  constructor( private readonly httpService:HttpService){}
  search(keyword:string) {
    return this.httpService.get("https://www.nhsinform.scot/symptoms-and-self-help/a-to-z/")
    .pipe(
      map((response:any) => {
        const html:string = response.data;
        const dom = new JSDOM(html);
        const nhsLinks: HTMLAnchorElement[] = Array.from(
          dom.window.document.querySelectorAll('a.nhs-uk__az-link'),
        );
         return nhsLinks.map(link => {
          return link.text.trim();
        }).filter(text => {
          return text.includes(keyword);
        })

      })
    );
  }
}
