import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CanonicalService } from '../../../services/canonical.service';
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

  constructor(private canonicalService: CanonicalService, private meta: Meta) {
    this.meta.addTags([
      {
        name: 'keywords',
        content: 'магазин, как проехать, где находится, адрес, позвонить, написать, вармхаус адрес, вармхаус бай'
      },
      {
        name: 'description',
        content: 'Магазин Warmehaus находится на строительном рынке "Уручье" города Минск.'
      },
      {
        property: 'og:title',
        content: 'Контакты'
      },
      {
        property: 'og:description',
        content: 'Телефоны, адрес, консульнация по телефону, проложить маршрут к магазину'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image',
        content: '../../../assets/images/og-contacts.jpg'
      },
      {
        property: 'og:url',
        content: 'https://warmehaus.com.by/home/contacts'
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
