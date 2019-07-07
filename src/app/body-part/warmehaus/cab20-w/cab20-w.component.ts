import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION } from '../../../../data/cab-20W.data';
import { CanonicalService } from '../../../../services/canonical.service';

@Component({
  selector: 'app-cab20-w',
  templateUrl: './cab20-w.component.html',
  styleUrls: ['./cab20-w.component.scss']
})
export class Cab20WComponent implements OnInit {
  constructor(private metaService: CanonicalService) {}
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.metaService.createCanonicalURL();
    this.dataSource1.sort = this.sort;
    this.dataSource1.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
}
