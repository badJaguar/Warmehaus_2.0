import { Component, OnInit, ViewChild } from '@angular/core';
import { ELEMENT_ANTI_ICING_SYSTEMS_DATA } from '../../../../data/anti-icing/anti-icing-systems-data';
import { ELEMENT_DATA_PIPE_HEATING_CABLE } from '../../../../data/anti-icing/pipe-heating-cable-data';
import { IMAGEVIEWER_CONFIG } from '@hallysonh/ngx-imageviewer';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MY_IMAGEVIEWER_CONFIG } from '../../../../constants/image-view-styles';
import { CanonicalService } from '../../../../services/canonical.service';
import { Meta } from '@angular/platform-browser';
import { MetaAntiIcing } from '../../../seo/open-graph/meta-data-antiIcing';
import { ITermostat } from '../../../../models/IMatTebleItem.interface';

@Component({
  selector: 'app-anit-icing',
  templateUrl: './anit-icing.component.html',
  styleUrls: ['./anit-icing.component.scss'],

  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('0ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [
    MetaAntiIcing,
    {
      provide: IMAGEVIEWER_CONFIG,
      useValue: MY_IMAGEVIEWER_CONFIG
    }
  ]
})
export class AnitIcingComponent implements OnInit {
  constructor(private canonicalService: CanonicalService, private meta: Meta, private tag: MetaAntiIcing) {
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

  //
  expandedElement: ITermostat | null;
  dataSource = new MatTableDataSource(ELEMENT_ANTI_ICING_SYSTEMS_DATA);
  columnsToDisplay = ['name', 'nominal', 'price'];
  headerNames: string[] = ['Тип', 'м2/Вт', 'Цена'];
  //

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.canonicalService.createCanonicalURL();
    this.pipeHeatingDataSource.sort = this.sort;
    this.pipeHeatingDataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.pipeHeatingDataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
