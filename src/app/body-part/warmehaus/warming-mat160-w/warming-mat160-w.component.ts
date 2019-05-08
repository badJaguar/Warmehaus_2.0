import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_MAT_160W } from '../../../../data/heating-mat160W.data';

@Component({
  selector: 'app-warming-mat160-w',
  templateUrl: './warming-mat160-w.component.html',
  styleUrls: ['./warming-mat160-w.component.scss']
})
export class WarmingMat160WComponent implements OnInit {
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_MAT_160W);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
