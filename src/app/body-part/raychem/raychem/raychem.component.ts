import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IItem } from '../../../../../src/models/IItem.interface';
import { WarmehausService } from '../../../../../src/services/warmehaus/warmehaus.service';

const compareFn = (a: IItem, b: IItem) => {
  if (a.price < b.price)
    return -1;
  if (a.price > b.price)
    return 1;
  return 0;
};

@Component({
  selector: 'app-raychem',
  templateUrl: './raychem.component.html',
  styleUrls: ['./raychem.component.scss']
})
export class RaychemT2BlueComponent implements OnInit {

  constructor(private service: WarmehausService) { }

  displayedColumns: string[] = ['description', 'nominal', 'price'];
  cableSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.service.getPosts({
      brandKey: 'raychem',
      typeKey: 'cable'
    }).subscribe(values => {
      this.cableSource.data = values.sort(compareFn);
    });
  }

  applyFilter(filterValue: string) {
    this.cableSource.filter = filterValue.trim().toLowerCase();
  }
}
