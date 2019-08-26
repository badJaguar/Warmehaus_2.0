import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class InfoComponent implements OnInit {

  constructor(@Inject(Window) private window: Window) { }

  ngOnInit() {
  }
  onTabMenu() {
    this.window.document.getElementById('tabMenu').scrollIntoView();
  }
}
