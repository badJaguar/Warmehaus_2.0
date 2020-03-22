import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA_MAT_160W } from '../../../../data/warmehaus/heating-mat160W.data';
import { MetaMat160 } from '../../../seo/open-graph/warmehaus/meta-data-cab-metaMat160';

@Component({
  selector: 'app-warming-mat160-w',
  templateUrl: './warming-mat160-w.component.html',
  styleUrls: ['./warming-mat160-w.component.scss'],
  providers: [MetaMat160]
})
export class WarmingMat160WComponent implements OnInit {

  constructor() {
  }
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_MAT_160W);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
