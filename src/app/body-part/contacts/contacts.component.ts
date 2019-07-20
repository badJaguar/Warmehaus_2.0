import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CanonicalService } from '../../../services/canonical.service';
import { Meta, Title } from '@angular/platform-browser';
import { MetaContacts } from '../../seo/open-graph/meta-data-contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [MetaContacts]
})
export class ContactsComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private canonicalService: CanonicalService, private meta: Meta, private tag: MetaContacts) {
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
    this.canonicalService.createCanonicalURL();
// tslint:disable-next-line: deprecation
    $(document).ready(() => {
      $('.opening-hours li').eq(new Date().getDay() - 1).addClass('today');
    });
  }
}
