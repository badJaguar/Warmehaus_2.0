import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_MAT_200W } from '../../../../data/heating-mat200-w.data';

@Component({
  selector: 'app-warming-mat200-w',
  templateUrl: './warming-mat200-w.component.html',
  styleUrls: ['./warming-mat200-w.component.scss']
})
export class WarmingMat200WComponent implements OnInit {

  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_MAT_200W);

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
