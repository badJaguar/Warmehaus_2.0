import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { CanonicalService } from '../../../../services/canonical.service';
import { Meta } from '@angular/platform-browser';
import { MetaMillimat } from './../../../../app/seo/open-graph/nexans/meta-data-millimat';
import { ELEMENT_DATA_TXLP_1 } from '../../../../data/nexans/txlp1';

@Component({
  selector: 'app-txlp1',
  templateUrl: './txlp1.component.html',
  styleUrls: ['./txlp1.component.scss'],
  providers: [MetaMillimat]
})
export class Txlp1Component implements OnInit {

  constructor(private meta: Meta, private tag: MetaMillimat) {

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
  dataSource2 = new MatTableDataSource(ELEMENT_DATA_TXLP_1);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource2.sort = this.sort;
    this.dataSource2.paginator = this.paginator;
  }
}
