import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA_ARNOLD_CAB_20W } from '../../../../data/arnold-rak/cab-20w.data';

@Component({
  selector: 'app-arnold-rak-cab20w',
  templateUrl: './arnold-rak-cab20w.component.html',
  styleUrls: ['./arnold-rak-cab20w.component.scss']
})
export class ArnoldRakCab20wComponent implements OnInit {
  constructor() {

  }

  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_ARNOLD_CAB_20W);

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
