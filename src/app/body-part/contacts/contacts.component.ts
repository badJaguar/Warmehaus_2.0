import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CanonicalService } from '../../../services/canonical.service';
import { Meta } from '@angular/platform-browser';
import { TokenType } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private canonicalService: CanonicalService, private meta: Meta) {
    this.meta.addTags([
      {
        name: 'keywords',
        content: 'магазин, как проехать, где находится, адрес, позвонить, написать, вармхаус адрес, вармхаус бай'
      },
      {
        name: 'description',
        content: 'Магазин Warmehaus находится на стройрынке "Уручье" в Минске.'
      },{
        property: 'og:image',
        content: `http://localhost:4200/assets/images/Email-Logo.gif`
      }]);
    this.meta.removeTag('description');
  }

  ngOnInit() {
    this.canonicalService.createCanonicalURL();
    $(document).ready(function () {
      $('.opening-hours li').eq(new Date().getDay() - 1).addClass('today');
    });
  }
}
