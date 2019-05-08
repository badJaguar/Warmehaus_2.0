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
          { name: 'Двужильный кабель 14Вт', path: './cable-14Watt' },
          { name: 'Двужильный кабель 20ВТ UV', path: './cable-20Watt' },
          { name: 'Инфракрасная плёнка', path: './films' },
        ]
      },
      // { name: 'Главная / Контакты', path: './contacts'},

      //     { name: 'Терморегуляторы', path: './termostats' },
      //     { name: 'Антиобледенение', path: './anti-icing' },
      //   ]
      // },
    ];
    return routes;
  }
}
