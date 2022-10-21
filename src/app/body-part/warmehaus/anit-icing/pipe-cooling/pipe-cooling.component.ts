import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Meta } from '@angular/platform-browser';
import { IItem } from '../../../../../../src/models/IItem.interface';
import { WarmehausService } from '../../../../../../src/services/warmehaus/warmehaus.service';
import { MetaAntiIcing } from '../../../../../app/seo/open-graph/warmehaus/meta-data-antiIcing';

const compareFn = (a: IItem, b: IItem) => {
  if (a.description < b.description)
    return -1;
  if (a.description > b.description)
    return 1;
  return 0;
};

@Component({
  selector: 'app-pipe-cooling',
  templateUrl: './pipe-cooling.component.html',
  styleUrls: ['./pipe-cooling.component.scss'],
  providers: [MetaAntiIcing]
})
export class PipeCoolingComponent implements OnInit {

  constructor(private meta: Meta, private tag: MetaAntiIcing, private service: WarmehausService) {
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

  pipeHeatingDataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['description', 'nominal', 'price'];

  ngOnInit() {
    this.service.getPosts({
      brandKey: 'warmehaus',
      typeKey: 'antiicing'
    }).subscribe(values => {
      this.pipeHeatingDataSource.data = values.sort(compareFn);
    });
  }

  applyFilter(filterValue: string) {
    this.pipeHeatingDataSource.filter = filterValue.trim().toLowerCase();
  }
}
