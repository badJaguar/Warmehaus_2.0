import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MetaService } from '../../../services/meta.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private metaService: MetaService, private meta: Meta) {
    this.meta.addTag({
      name: 'keywords',
      content: 'магазин, как проехать, где находится, адрес, позвонить, написать, вармхаус адрес, вармхаус бай'});
  }

  ngOnInit() {
    this.metaService.createCanonicalURL();
    $(document).ready(function () {
      $('.opening-hours li').eq(new Date().getDay() - 1).addClass('today');
    });
  }
}

