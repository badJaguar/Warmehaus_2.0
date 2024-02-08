import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ITile } from '../../../models/ITile.interface';
import { MetaSrartPage } from '../../seo/open-graph/warmehaus/meta-data-startPage';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  providers: [MetaSrartPage]
})
export class StartPageComponent implements OnInit {
  cookieValue = 'SameSite=None';

  constructor(private cookieService: CookieService) {

  }

  breakpoint: number;
  warmehausTiles: ITile[] = [
    {
      route: '/warmehaus',
      picUrl: 'assets/images/main-page-pics/warmehaus-banner.jpg',
      alt: 'Теплые полы Warmehaus',
    },
    {
      route: '/nexans',
      picUrl: 'assets/images/main-page-pics/nexans-banner.jpg',
      alt: 'Теплые полы Nexans',
    },
    {
      route: '/devi',
      picUrl: 'assets/images/devi/devi-tile.png',
      alt: 'Теплые полы Devi',
    },
    {
      route: '/arnold-rak',
      picUrl: 'assets/images/main-page-pics/arnold-rak-banner.jpg',
      alt: 'Теплые полы Grand Meyer',
    },
    {
      route: '/warmehaus/termostats',
      picUrl: 'assets/images/main-page-pics/tile-termostat.png',
      alt: 'Турморегуляторы',
    },
  ];
  ngOnInit() {
    this.cookieService.set('/', '/', 30, 'None', 'None', true, 'None');
    this.cookieValue = this.cookieService.get('/');
  }
}
