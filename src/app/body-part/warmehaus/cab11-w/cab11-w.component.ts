import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Meta } from '@angular/platform-browser';
import { ELEMENT_DATA_MAT_CAB_11W_THIN } from '../../../../data/warmehaus/cab-11W.data';
import { MetaCab11Watt } from '../../../seo/open-graph/warmehaus/meta-data-cab-11Watt';

@Component({
  selector: 'app-cab11-w',
  templateUrl: './cab11-w.component.html',
  styleUrls: ['./cab11-w.component.scss'],
  providers: [MetaCab11Watt]
})
export class Cab11WComponent implements OnInit {
  constructor(private meta: Meta, private tag: MetaCab11Watt) {
    this.meta.addTags([
      { name: this.tag.keywords, content: this.tag.keywordsContent },
      { name: this.tag.description, content: this.tag.descriptionContent },
      { property: this.tag.ogTitle, content: this.tag.ogTitleContent },
      { property: this.tag.ogDescription, content: this.tag.ogDescriptionContent },
      { property: this.tag.ogType, content: this.tag.ogTypeContent },
      { property: this.tag.ogImage, content: this.tag.ogImageContent },
      { property: this.tag.ogUrl, content: this.tag.ogUrlContent }
    ]);
  }

  displayedColumns: string[] = ['name', 'nominal', 'price'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_MAT_CAB_11W_THIN);

  // @ViewChild(MatSort, { static: true }) sort: MatSort;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource1.sort = this.sort;
    // this.dataSource1.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
}
