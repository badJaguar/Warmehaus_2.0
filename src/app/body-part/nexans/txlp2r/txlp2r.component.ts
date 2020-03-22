import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Meta } from '@angular/platform-browser';
import { MetaMillimat } from '../../../../app/seo/open-graph/nexans/meta-data-millimat';
import { ELEMENT_DATA_TXLP_2R } from '../../../../data/nexans/txlp2r';

@Component({
  selector: 'app-txlp2r',
  templateUrl: './txlp2r.component.html',
  styleUrls: ['./txlp2r.component.scss'],
  providers: [MetaMillimat]
})
export class Txlp2rComponent implements OnInit {

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
  dataSource2 = new MatTableDataSource(ELEMENT_DATA_TXLP_2R);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource2.sort = this.sort;
    this.dataSource2.paginator = this.paginator;
  }
}
