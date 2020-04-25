import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA_RAYCHEM_T2BLUE } from '../../../../data/raychem/raychem-t2blue.data';

@Component({
  selector: 'app-raychem',
  templateUrl: './raychem.component.html',
  styleUrls: ['./raychem.component.scss']
})
export class RaychemT2BlueComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_RAYCHEM_T2BLUE);

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
