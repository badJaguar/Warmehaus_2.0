import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_MAT_CAB_14W_THIN } from '../../../../data/warmehaus/cab-14W.data';
import { CanonicalService } from '../../../../services/canonical.service';
import { Meta } from '@angular/platform-browser';
import { MetaCab14Watt } from '../../../seo/open-graph/meta-data-cab-14Watt';

@Component({
  selector: 'app-cab14-w',
  templateUrl: './cab14-w.component.html',
  styleUrls: ['./cab14-w.component.scss'],
  providers: [MetaCab14Watt]
})
export class Cab14WComponent implements OnInit {
  constructor(private metaService: CanonicalService, private meta: Meta, private tag: MetaCab14Watt) {
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
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_MAT_CAB_14W_THIN);

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
