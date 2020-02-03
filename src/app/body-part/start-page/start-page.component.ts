import { Component, OnInit } from '@angular/core';
import { ITile } from '../../../models/ITile.interface';
import { CanonicalService } from '../../../services/canonical.service';
import { MetaSrartPage } from '../../seo/open-graph/warmehaus/meta-data-startPage';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  providers: [MetaSrartPage]
})
export class StartPageComponent implements OnInit {
  cookieValue = 'SameSite=None';

  constructor(
    private metaService: CanonicalService,
    private cookieService: CookieService) {

  }

  breakpoint: number;
  warmehausTiles: ITile[] = [
    {
      route: '',
      picUrl: 'assets/images/gridPics/grid-1-web.jpg',
      cols: 4,
      rows: 2,
      alt: 'Теплые полы в Минске',
      disableStyles: true
    },

    {
      route: '/warmehaus',
      picUrl: 'assets/images/main-page-pics/warmehaus-banner.jpg',
      cols: 2,
      rows: 1,
      alt: 'Теплые полы Warmehaus',
    },
    {
      route: '/nexans',
      picUrl: 'assets/images/main-page-pics/nexans-banner.jpg',
      cols: 2,
      rows: 1,
      alt: 'Теплые полы Nexans',
    },
  ];
  ngOnInit() {
    this.metaService.createCanonicalURL();

    this.cookieService.set('/', '/', 30, 'None', 'None', true, 'None');
    this.cookieValue = this.cookieService.get('/');

    if (window.innerWidth >= 416) {
      this.warmehausTiles[0].cols = 4;
      this.warmehausTiles[0].rows = 2;
    } else {
      this.warmehausTiles[0].cols = 2;
      this.warmehausTiles[0].rows = 1;
    }
    this.breakpoint = (window.innerWidth <= 416) ? 2 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 416) ? 2 : 4;
    if (event.target.innerWidth <= 416) {
      this.warmehausTiles[0].cols = 2;
      this.warmehausTiles[0].rows = 1;
    } else {
      this.warmehausTiles[0].cols = 4;
      this.warmehausTiles[0].rows = 2;
    }
  }
}
