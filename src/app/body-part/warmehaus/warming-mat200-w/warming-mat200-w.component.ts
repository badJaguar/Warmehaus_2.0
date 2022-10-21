import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IItem } from 'src/models/IItem.interface';
import { WarmehausService } from 'src/services/warmehaus/warmehaus.service';
import { MetaMat200 } from '../../../seo/open-graph/warmehaus/meta-data-cab-metaMat200';

const compareFn = (a: IItem, b: IItem) => {
  if (a.price < b.price)
    return -1;
  if (a.price > b.price)
    return 1;
  return 0;
};

@Component({
  selector: 'app-warming-mat200-w',
  templateUrl: './warming-mat200-w.component.html',
  styleUrls: ['./warming-mat200-w.component.scss'],
  providers: [MetaMat200]
})
export class WarmingMat200WComponent implements OnInit {
  constructor(private service: WarmehausService) {
  }

  displayedColumns: string[] = ['description', 'nominal', 'price'];
  matsSource = new MatTableDataSource([]);

  ngOnInit() {
    this.service.getPosts({
      brandKey: 'warmehaus',
      typeKey: 'mats'
    }).subscribe(values => {
      this.matsSource.data = values.filter(value => value.description.includes('200W')).sort(compareFn);
    });
  }

  applyFilter(filterValue: string) {
    this.matsSource.filter = filterValue.trim().toLowerCase();
  }
}
