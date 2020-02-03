import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_MAT_200W } from '../../../../data/warmehaus/heating-mat200-w.data';
import { CanonicalService } from '../../../../services/canonical.service';
import { MetaMat200 } from '../../../seo/open-graph/warmehaus/meta-data-cab-metaMat200';


@Component({
  selector: 'app-warming-mat200-w',
  templateUrl: './warming-mat200-w.component.html',
  styleUrls: ['./warming-mat200-w.component.scss'],
  providers: [MetaMat200]
})
export class WarmingMat200WComponent implements OnInit {

  constructor(private metaService: CanonicalService) {
  }

  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_MAT_200W);

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
