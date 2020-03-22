import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ELEMENT_DATA_MAT_200W } from '../../../../data/warmehaus/heating-mat200-w.data';
import { MetaMat200 } from '../../../seo/open-graph/warmehaus/meta-data-cab-metaMat200';


@Component({
  selector: 'app-warming-mat200-w',
  templateUrl: './warming-mat200-w.component.html',
  styleUrls: ['./warming-mat200-w.component.scss'],
  providers: [MetaMat200]
})
export class WarmingMat200WComponent implements OnInit {

  constructor() {
  }

  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_MAT_200W);

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
