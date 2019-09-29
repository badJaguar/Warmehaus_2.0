import { Component, OnInit } from '@angular/core';
import { ITile } from '../../../models/ITile.interface';
import { CanonicalService } from '../../../services/canonical.service';
import { Meta, Title } from '@angular/platform-browser';
import { MetaSrartPage } from '../../seo/open-graph/meta-data-startPage';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  providers: [MetaSrartPage]
})
export class StartPageComponent implements OnInit {

  constructor(private metaService: CanonicalService, private meta: Meta, private titleService: Title, private tag: MetaSrartPage) {
    this.meta.addTags([
      { name: this.tag.keywords, content: this.tag.keywordsContent },
      { name: this.tag.description, content: this.tag.descriptionContent },
      { property: this.tag.ogTitle, content: this.tag.ogTitleContent },
      { property: this.tag.ogDescription, content: this.tag.ogDescriptionContent },
      { property: this.tag.ogType, content: this.tag.ogTypeContent },
      { property: this.tag.ogImage, content: this.tag.ogImageContent },
      { property: this.tag.ogUrl, content: this.tag.ogUrlContent }
    ]);
  }

  breakpoint: number;
  tiles: ITile[] = [
    {
      route: '',
      picUrl: 'assets/images/gridPics/grid-1-web-action.jpg',
      cols: 4,
      rows: 2,
      alt: 'Теплые полы в Минске',
      disableStyles: true
    },
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
      this.tiles[0].cols = 4;
      this.tiles[0].rows = 2;
    } else {
      this.tiles[0].cols = 2;
      this.tiles[0].rows = 1;
    }
    this.breakpoint = (window.innerWidth <= 416) ? 2 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 416) ? 2 : 4;
    if (event.target.innerWidth <= 416) {
      this.tiles[0].cols = 2;
      this.tiles[0].rows = 1;
    } else {
      this.tiles[0].cols = 4;
      this.tiles[0].rows = 2;
    }
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
