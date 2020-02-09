import { Component, OnInit } from '@angular/core';
import { CanonicalService } from '../../../../../services/canonical.service';
import { Meta, Title } from '@angular/platform-browser';
import { MetaAntiIcing } from '../../../../../app/seo/open-graph/warmehaus/meta-data-antiIcing';
import { ELEMENT_ANTI_ICING_SYSTEMS_DATA } from '../../../../../data/warmehaus/anti-icing/anti-icing-systems-data';

@Component({
  selector: 'app-gutter-cooling',
  templateUrl: './gutter-cooling.component.html',
  styleUrls: ['./gutter-cooling.component.scss'],
  providers: [MetaAntiIcing]
})
export class GutterCoolingComponent implements OnInit {

  constructor(
    private meta: Meta, private tag: MetaAntiIcing, private titleService: Title) {
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
  data = ELEMENT_ANTI_ICING_SYSTEMS_DATA;

  ngOnInit() {
  }

  public setTitle(newTitle: string, itemName: string) {
    newTitle = `${newTitle} ${itemName}`;
    this.titleService.setTitle(newTitle);
  }
}
