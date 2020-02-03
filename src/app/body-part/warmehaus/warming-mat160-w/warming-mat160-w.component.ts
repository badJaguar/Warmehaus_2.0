import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_MAT_160W } from '../../../../data/warmehaus/heating-mat160W.data';
import { CanonicalService } from '../../../../services/canonical.service';
import { Meta } from '@angular/platform-browser';
import { MetaMat160 } from '../../../seo/open-graph/warmehaus/meta-data-cab-metaMat160';

@Component({
  selector: 'app-warming-mat160-w',
  templateUrl: './warming-mat160-w.component.html',
  styleUrls: ['./warming-mat160-w.component.scss'],
  providers: [MetaMat160]
})
export class WarmingMat160WComponent implements OnInit {

  constructor(private metaService: CanonicalService) {
  }
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_MAT_160W);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.metaService.createCanonicalURL();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
