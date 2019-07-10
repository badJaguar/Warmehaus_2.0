import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CanonicalService } from '../../../services/canonical.service';
import { Meta } from '@angular/platform-browser';
import { OgContacts } from 'src/open-graph/og-data-contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [OgContacts]
})
export class ContactsComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private canonicalService: CanonicalService, private meta: Meta, private tag: OgContacts) {
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
