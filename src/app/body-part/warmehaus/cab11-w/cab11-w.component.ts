import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_MAT_CAB_11W_THIN } from '../../../../data/cab-11W.data';
import { CanonicalService } from '../../../../services/canonical.service';

@Component({
  selector: 'app-cab11-w',
  templateUrl: './cab11-w.component.html',
  styleUrls: ['./cab11-w.component.scss']
})
export class Cab11WComponent implements OnInit {
constructor(private metaService: CanonicalService) {}
  displayedColumns: string[] = ['name', 'nominal', 'price'];
    dataSource1 = new MatTableDataSource(ELEMENT_DATA_MAT_CAB_11W_THIN);
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
