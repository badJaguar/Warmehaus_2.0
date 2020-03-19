import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { MetaFilms } from 'src/app/seo/open-graph/warmehaus/meta-data-cab-metaFilms';
import { IItem } from 'src/models/IItem.interface';
import { GraphQlService } from 'src/services/graphql/gql.service';
import { filmsQuery } from 'src/services/graphql/queries/queries';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [MetaFilms]
})
export class FilmsComponent implements OnInit {
  gqlService: Observable<IItem[]>;

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

    this.gqlService = gqlService.initQuery(filmsQuery);
  }

  displayedColumns: string[] = ['name', 'nominal', 'price'];
  filmsSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    this.gqlService.subscribe(films => {
      this.filmsSource.data = films;
      this.filmsSource.sort = this.sort;
      this.filmsSource.paginator = this.paginator;
    })
  }
  applyFilter(filterValue: string) {
    this.filmsSource.filter = filterValue.trim().toLowerCase();
  }
}

