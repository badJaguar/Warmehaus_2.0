import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IMAGEVIEWER_CONFIG } from '@hallysonh/ngx-imageviewer';
import { MY_IMAGEVIEWER_CONFIG } from '../../../../app/constants/image-view-styles';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IMaterialExpanding } from '../../../../models/IMaterialExpanding.interface';
import { ELEMENT_DATA_TERMOSTATS } from '../../../../data/termostats.data';

@Component({
  selector: 'app-termostats',
  templateUrl: './termostats.component.html',
  styleUrls: ['./termostats.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('0ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [
    {
      provide: IMAGEVIEWER_CONFIG,
      useValue: MY_IMAGEVIEWER_CONFIG
    }
  ]
})
export class TermostatsComponent implements OnInit {

  columnsToDisplay = ['name', 'nominal', 'price'];
  headerNames: string[] = ['Тип', 'м2/Вт', 'Цена'];
  expandedElement: IMaterialExpanding | null;

  dataSource = new MatTableDataSource(ELEMENT_DATA_TERMOSTATS);

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