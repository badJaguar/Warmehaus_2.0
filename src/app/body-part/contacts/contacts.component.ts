import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CanonicalService } from '../../../services/canonical.service';
import { MetaContacts } from '../../seo/open-graph/warmehaus/meta-data-contacts';

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

  constructor(private canonicalService: CanonicalService) {
  }

  ngOnInit() {
    this.canonicalService.createCanonicalURL();
    // tslint:disable-next-line: deprecation
    $(document).ready(() => {
      $('.opening-hours li').eq(new Date().getDay() - 1).addClass('today');
    });
  }
}
