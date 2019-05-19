import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MetaService } from 'src/services/meta.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.createCanonicalURL();
    $(document).ready(function () {
      $('.opening-hours li').eq(new Date().getDay() - 1).addClass('today');
    });
  }
}

