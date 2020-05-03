import { Injectable } from '@angular/core';
import { ELEMENT_ANTI_ICING_SYSTEMS_DATA } from '../data/warmehaus/anti-icing/anti-icing-systems-data';
import { ELEMENT_DATA_TERMOSTATS } from '../data/warmehaus/termostats.data';
import { ITermostat } from '../models/IMatTebleItem.interface';

@Injectable({
  providedIn: 'root',
})

export class BreadcrumbRoutesService {

  public termostats: ITermostat[] = this.getTermostats;
  public guttersAndTheirSystems: ITermostat[] = this.getGuttersAndTheirSystems;

  constructor() { }

  private get getGuttersAndTheirSystems() {
    return ELEMENT_ANTI_ICING_SYSTEMS_DATA;
  }
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
          { name: 'Маты 160Вт', path: './mat-160Watt' },
          { name: 'Маты 200Вт', path: './mat-200Watt' },
          // { name: 'Двужильный кабель 11Вт', path: './cable-11Watt' },
          { name: 'Двужильный кабель 14Вт', path: './cable-14Watt' },
          { name: 'Двужильный кабель 20ВТ UV', path: './cable-20Watt' },
          { name: 'Инфракрасная плёнка', path: './films' },

          {
            name: 'Антиобледенение', path: './anti-icing', children: [
              { name: 'Обогрев труб', path: './pipe-cooling' },
              {
                name: 'Обогрев труб и системы управления',
                path: './systems-and-gutter-cooling', children: this.guttersAndTheirSystems.map(x => {
                  return {
                    name: x.name,
                    path: `./${x.id.toString()}`
                  };
                })
              },
            ]
          },
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
        name: 'Nexans', path: './nexans', children: [
          { name: 'Millimat', path: './millimat' },
          { name: 'TXLP/1', path: './txlp1' },
          { name: 'TXLP/2R', path: './txlp2r' },
        ]
      },
      {
        name: 'Raychem', path: './raychem', children: [
          { name: 'T2Blue', path: './t2blue' },
          { name: 'T2QuickNet', path: './t2quicknet' },
        ]
      },
      {
        name: 'Arnold Rak', path: './arnold-rak', children: [
          { name: 'Мат 180 Ватт', path: './mat-180w' },
          { name: 'Мат 200 Ватт', path: './mat-200w' },
          { name: 'Кабель 20 Ватт', path: './cab-20w' },
        ]
      },
    ];
    return routes;
  }
}
