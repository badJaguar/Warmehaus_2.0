import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Meta } from '@angular/platform-browser';
import { IItem } from 'src/models/IItem.interface';
import { WarmehausService } from 'src/services/warmehaus/warmehaus.service';
import { MetaCab20Watt } from '../../../seo/open-graph/warmehaus/meta-data-cab-20Watt';

const compareFn = (a: IItem, b: IItem) => {
  if (a.price < b.price)
    return -1;
  if (a.price > b.price)
    return 1;
  return 0;
};

@Component({
  selector: 'app-cab20-w',
  templateUrl: './cab20-w.component.html',
  styleUrls: ['./cab20-w.component.scss'],
  providers: [MetaCab20Watt]
})
export class Cab20WComponent implements OnInit {
  cableSource = new MatTableDataSource([]);

  constructor(private meta: Meta, private tag: MetaCab20Watt, private service: WarmehausService) {
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
      typeKey: 'cable'
    }).subscribe(values => {
      this.cableSource.data = values.sort(compareFn);
    });
  }

  applyFilter(filterValue: string) {
    this.cableSource.filter = filterValue.trim().toLowerCase();
  }
}
