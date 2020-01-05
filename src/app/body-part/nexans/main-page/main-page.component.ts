import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CanonicalService } from '../../../../services/canonical.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class NexansMainPageComponent implements OnInit {

  constructor(private titleService: Title, private metaService: CanonicalService) { }

  ngOnInit() {
    this.metaService.createCanonicalURL();
  }

}
