import { Component, OnInit } from '@angular/core';
import { ITile } from '../../../../models/ITile.interface';
import { Title } from '@angular/platform-browser';
import { CanonicalService } from '../../../../services/canonical.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class WarmehausMainPageComponent implements OnInit {

  constructor(private titleService: Title, private metaService: CanonicalService) { }

  breakpoint: number;
  warmehausTiles: ITile[] = [
    {
      route: '/warmehaus/mat-160Watt',
      picUrl: 'assets/images/gridPics/Heating_Mat_160W.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный мат 160 Вт'
    },
    {
      route: '/warmehaus/mat-200Watt',
      picUrl: 'assets/images/gridPics/Heating_Mat_200W.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный мат 200 Вт'
    },
    {
      route: '/warmehaus/cable-11Watt',
      picUrl: 'assets/images/gridPics/Heating_Cable_To_Layer_11W.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный Кабель в слой плиточного клея 11Вт'
    },

    {
      route: '/warmehaus/cable-14Watt',
      picUrl: 'assets/images/gridPics/Heating_Cable_To_Layer_14W.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный Кабель в слой плиточного клея 14Вт'
    },
    {
      route: '/warmehaus/cable-20Watt',
      picUrl: 'assets/images/gridPics/Heating_Cable_To_Creed_20W.png',
      cols: 2,
      rows: 1,
      alt: 'Нагревательный Кабель в стяжку 20Вт'
    },
    {
      route: '/warmehaus/films',
      picUrl: 'assets/images/gridPics/Infrakrasnaya_Plyonka.png',
      cols: 2,
      rows: 1,
      alt: 'Инфракрасная пленка'
    },
    {
      route: '/warmehaus/anti-icing',
      picUrl: 'assets/images/gridPics/Anti-icing_Systems.png',
      cols: 2,
      rows: 1,
      alt: 'Системы антиобледенения'
    },
    {
      route: '/warmehaus/termostats',
      picUrl: 'assets/images/gridPics/Termostats.png',
      cols: 2,
      rows: 1,
      alt: 'Терморегуляторы'
    },
  ];
  ngOnInit() {
    this.metaService.createCanonicalURL();

    if (window.innerWidth >= 416) {
      this.warmehausTiles[0].cols = 2;
      this.warmehausTiles[0].rows = 1;
    } else {
      this.warmehausTiles[0].cols = 2;
      this.warmehausTiles[0].rows = 1;
    }
    this.breakpoint = 4;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
