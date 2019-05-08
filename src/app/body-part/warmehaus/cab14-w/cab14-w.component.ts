import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cab14-w',
  templateUrl: './cab14-w.component.html',
  styleUrls: ['./cab14-w.component.scss']
})
export class Cab14WComponent implements OnInit {
  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_MAT_CAB_14W_THIN);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource1.sort = this.sort;
    this.dataSource1.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
}
