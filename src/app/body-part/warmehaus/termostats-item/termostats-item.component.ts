import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA_TERMOSTATS } from '../../../../data/termostats.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-termostats-item',
  templateUrl: './termostats-item.component.html',
  styleUrls: ['./termostats-item.component.scss']
})
export class TermostatsItemComponent implements OnInit {
  public itemId = +this.route.snapshot.paramMap.get('id');
  public currentItem = {};

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.currentItem = this.getItem(this.itemId);
  }

  public getItem = (id: number) => {
    const data = ELEMENT_DATA_TERMOSTATS;
    const filtered = data.filter(x => x.id === id);
    if (filtered) {
      return filtered[0];
    }
  }
}