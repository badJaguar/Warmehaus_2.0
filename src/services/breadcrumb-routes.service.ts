import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbRoutesService {


  constructor() { }
  getMenu(): Array<any> {
    const routes = [
      { name: 'Главная', path: './home' },
      {
        name: 'Wärmehaus', path: './warmehaus', children: [
          { name: ' Маты 160Вт', path: './mat-160Watt' },
          { name: ' Маты 200Вт', path: './mat-200Watt' },
          { name: 'Двужильный кабель 11Вт', path: './cable-11Watt' },
        ]
      },
      // { name: 'Главная / Контакты', path: './contacts'},

      //     { name: 'Двужильный CAB 14W THIN', path: './cab-14W-thin' },
      //     { name: 'Двужильный CAB 20W UV', path: './cab-20W-uv-protection' },
      //     { name: 'Терморегуляторы', path: './termostats' },
      //     { name: 'Инфракрасная плёнка', path: './films' },
      //     { name: 'Антиобледенение', path: './anti-icing' },
      //   ]
      // },
    ];
    return routes;
  }
}
