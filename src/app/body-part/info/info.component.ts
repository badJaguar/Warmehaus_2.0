import { Component, OnInit, Inject } from '@angular/core';
import { MetaInstructionsPage } from '../../seo/open-graph/meta-data-instructions';
import { CanonicalService } from '../../../services/canonical.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  providers: [
    { provide: Window, useValue: window },
    MetaInstructionsPage
  ]
})
export class InfoComponent implements OnInit {

  constructor(
    @Inject(Window) private window: Window,
    private metaService: CanonicalService,
    private meta: Meta, private titleService: Title,
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
    this.window.document.getElementById('tabMenu').scrollIntoView();
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
