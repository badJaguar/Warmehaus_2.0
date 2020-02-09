import { Component, OnInit, ViewChild } from '@angular/core';
import { CanonicalService } from '../../../../../services/canonical.service';
import { Meta } from '@angular/platform-browser';
import { MetaAntiIcing } from '../../../../../app/seo/open-graph/warmehaus/meta-data-antiIcing';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ELEMENT_DATA_PIPE_HEATING_CABLE } from '../../../../../data/warmehaus/anti-icing/pipe-heating-cable-data';

@Component({
  selector: 'app-pipe-cooling',
  templateUrl: './pipe-cooling.component.html',
  styleUrls: ['./pipe-cooling.component.scss'],
  providers: [MetaAntiIcing]
})
export class PipeCoolingComponent implements OnInit {

  constructor(private meta: Meta, private tag: MetaAntiIcing) {
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
  pipeHeatingDataSource = new MatTableDataSource(ELEMENT_DATA_PIPE_HEATING_CABLE);


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.pipeHeatingDataSource.sort = this.sort;
    this.pipeHeatingDataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.pipeHeatingDataSource.filter = filterValue.trim().toLowerCase();
  }
}
