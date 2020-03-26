import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { IItem } from '../../../../models/IItem.interface';
import { GraphQlService, propertyOf } from '../../../../services/graphql/gql.service';
import { getCab14WQuery } from '../../../../services/graphql/queries/cab14W-query';
import { FloorsKind, ModelType } from '../../../../services/graphql/query-model-types/warmehaus-query-models';
import { MetaCab14Watt } from '../../../seo/open-graph/warmehaus/meta-data-cab-14Watt';

@Component({
  selector: 'app-cab14-w',
  templateUrl: './cab14-w.component.html',
  styleUrls: ['./cab14-w.component.scss'],
  providers: [MetaCab14Watt]
})
export class Cab14WComponent implements AfterViewInit {
  gqlService: Observable<IItem[]>;
  cab14WSource = new MatTableDataSource();

  constructor(private meta: Meta, private tag: MetaCab14Watt, gqlService: GraphQlService) {
    this.meta.addTags([
      { name: this.tag.keywords, content: this.tag.keywordsContent },
      { name: this.tag.description, content: this.tag.descriptionContent },
      { property: this.tag.ogTitle, content: this.tag.ogTitleContent },
      { property: this.tag.ogDescription, content: this.tag.ogDescriptionContent },
      { property: this.tag.ogType, content: this.tag.ogTypeContent },
      { property: this.tag.ogImage, content: this.tag.ogImageContent },
      { property: this.tag.ogUrl, content: this.tag.ogUrlContent }
    ]);

    this.gqlService = gqlService.getItems({
      queryModelType: getCab14WQuery,
      floorsKind: propertyOf<FloorsKind>('warmehausFloors'),
      model: propertyOf<ModelType>('cab14W')
    }
    );
  }

  displayedColumns: string[] = ['name', 'nominal', 'price'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    // this.gqlService.subscribe(cabs => {
    //   this.cab14WSource.data = cabs;
    this.cab14WSource.sort = this.sort;
    this.cab14WSource.paginator = this.paginator;
    // });
  }

  applyFilter(filterValue: string) {
    this.cab14WSource.filter = filterValue.trim().toLowerCase();
  }
}
