import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class RaychemMainPageComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
