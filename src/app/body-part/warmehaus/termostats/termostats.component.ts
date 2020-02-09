import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { IMAGEVIEWER_CONFIG } from '@hallysonh/ngx-imageviewer';
import { MY_IMAGEVIEWER_CONFIG } from '../../../../constants/image-view-styles';
import { ELEMENT_DATA_TERMOSTATS } from '../../../../data/warmehaus/termostats.data';
import { MetaTermostats } from '../../../seo/open-graph/warmehaus/meta-data-cab-metaTernostats';

@Component({
  selector: 'app-termostats',
  templateUrl: './termostats.component.html',
  styleUrls: ['./termostats.component.scss'],
  providers: [
    MetaTermostats,
    {
      provide: IMAGEVIEWER_CONFIG,
      useValue: MY_IMAGEVIEWER_CONFIG
    }
  ]
})
export class TermostatsComponent implements OnInit {

  constructor(
    private meta: Meta, private tag: MetaTermostats, private titleService: Title) {
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
  data = ELEMENT_DATA_TERMOSTATS;

  ngOnInit() {
  }

  public setTitle(newTitle: string, itemName: string) {
    newTitle = `${newTitle} ${itemName}`;
    this.titleService.setTitle(newTitle);
  }
}
