import { Component, OnInit, Inject } from '@angular/core';
import { MetaInstructionsPage } from '../../seo/open-graph/meta-data-instructions';
import { CanonicalService } from '../../../services/canonical.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  providers: [ MetaInstructionsPage ]
})
export class InfoComponent implements OnInit {

  constructor(
    private metaService: CanonicalService,
    private meta: Meta,
    private tag: MetaInstructionsPage) {
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

  ngOnInit() {
    this.metaService.createCanonicalURL();
  }
  onTabMenu() {
    document.getElementById('tabMenu').scrollIntoView();
  }
}
