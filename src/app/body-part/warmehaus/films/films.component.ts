import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { WarmehausService } from 'src/services/warmehaus/warmehaus.service';
import { MetaFilms } from '../../../../app/seo/open-graph/warmehaus/meta-data-cab-metaFilms';
import { IItem } from '../../../../models/IItem.interface';


const compareFn = (a: IItem, b: IItem) => {
  if (a.description < b.description)
    return -1;
  if (a.description > b.description)
    return 1;
  return 0;
};

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [MetaFilms]
})
export class FilmsComponent implements OnInit {
  filmsSource = new MatTableDataSource([]);

  constructor(private meta: Meta, private tag: MetaFilms, private service: WarmehausService) {
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

  displayedColumns: string[] = ['description', 'nominal', 'price'];

  ngOnInit() {
    this.service.getPosts({
      brandKey: 'warmehaus',
      typeKey: 'film'
    }).subscribe(values => {
      this.filmsSource.data = values.sort(compareFn);
    });
  }

  applyFilter(filterValue: string) {
    this.filmsSource.filter = filterValue.trim().toLowerCase();
  }
}

