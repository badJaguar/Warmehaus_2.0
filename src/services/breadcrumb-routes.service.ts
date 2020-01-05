import { Injectable } from '@angular/core';
import { ITermostat } from '../models/IMatTebleItem.interface';
import { ELEMENT_DATA_TERMOSTATS } from '../data/termostats.data';

@Injectable({
  providedIn: 'root',
})

export class BreadcrumbRoutesService {

  public termostats: ITermostat[] = this.getTermostats;

  constructor() { }

  private get getTermostats() {
    return ELEMENT_DATA_TERMOSTATS;
  }

  getMenu(): Array<any> {
    const routes = [
      { name: 'Главная', path: '' },
      {
        name: 'Главная', path: './home', children: [
          { name: 'Контакты', path: './contacts' },
          { name: 'Инструкции', path: './instructions' },
        ]
      },
      {
        name: 'Wärmehaus', path: './warmehaus', children: [
          { name: ' Маты 160Вт', path: './mat-160Watt' },
          { name: ' Маты 200Вт', path: './mat-200Watt' },
          { name: 'Двужильный кабель 11Вт', path: './cable-11Watt' },
          { name: 'Двужильный кабель 14Вт', path: './cable-14Watt' },
          { name: 'Двужильный кабель 20ВТ UV', path: './cable-20Watt' },
          { name: 'Инфракрасная плёнка', path: './films' },
          { name: 'Антиобледенение', path: './anti-icing' },
          {
            name: 'Терморегуляторы', path: './termostats', children: this.termostats.map(x => {
              return {
                name: x.name,
                path: `./${x.id.toString()}`
              };
            })
          },
        ]
      },
      {
        name: 'Nexans', path: './nexans'
      },
    ];
    return routes;
  }
}
