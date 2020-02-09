import { Component, OnInit, ViewChild } from '@angular/core';
import { CanonicalService } from '../../../../services/canonical.service';
import { Meta } from '@angular/platform-browser';
import { ELEMENT_DATA_NEXANS_MILLIMAT } from '../../../../data/nexans/millimat';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MetaMillimat } from '../../../../app/seo/open-graph/nexans/meta-data-millimat';

@Component({
  selector: 'app-millimat',
  templateUrl: './millimat.component.html',
  styleUrls: ['./millimat.component.scss'],
  providers: [MetaMillimat]
})
export class MillimatComponent implements OnInit {

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
  dataSource1 = new MatTableDataSource(ELEMENT_DATA_NEXANS_MILLIMAT);

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
