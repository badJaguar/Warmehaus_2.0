import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA_ARNOLD_180W } from '../../../../data/arnold-rak/mat-180w.data';

@Component({
  selector: 'app-arnold-rak-mat180w',
  templateUrl: './arnold-rak-mat180w.component.html',
  styleUrls: ['./arnold-rak-mat180w.component.scss']
})
export class ArnoldRakMat180wComponent implements OnInit {
  constructor() {

  }

  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_ARNOLD_180W);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource1.sort = this.sort;
    this.dataSource1.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
}
