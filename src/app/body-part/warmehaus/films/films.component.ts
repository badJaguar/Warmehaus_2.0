import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { MetaFilms } from '../../../../app/seo/open-graph/warmehaus/meta-data-cab-metaFilms';
import { IItem } from '../../../../models/IItem.interface';
import { GraphQlService, propertyOf, QueryModel } from '../../../../services/graphql/gql.service';
import { getFilmsQuery } from '../../../../services/graphql/queries/films-query';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [MetaFilms]
})
export class FilmsComponent implements AfterViewInit {
  gqlService: Observable<IItem[]>;
  filmsSource = new MatTableDataSource();

  constructor(private meta: Meta, private tag: MetaFilms, gqlService: GraphQlService) {
    this.meta.addTags([
      { name: this.tag.keywords, content: this.tag.keywordsContent },
      { name: this.tag.description, content: this.tag.descriptionContent },
      { property: this.tag.ogTitle, content: this.tag.ogTitleContent },
      { property: this.tag.ogDescription, content: this.tag.ogDescriptionContent },
      { property: this.tag.ogType, content: this.tag.ogTypeContent },
      { property: this.tag.ogImage, content: this.tag.ogImageContent },
      { property: this.tag.ogUrl, content: this.tag.ogUrlContent }
    ]);

    this.gqlService = gqlService.getItems(getFilmsQuery, propertyOf<QueryModel>('films'));
  }

  displayedColumns: string[] = ['name', 'nominal', 'price'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {

    this.gqlService.subscribe(films => {
      this.filmsSource.data = films;
      this.filmsSource.sort = this.sort;
      this.filmsSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.filmsSource.filter = filterValue.trim().toLowerCase();
  }
}

