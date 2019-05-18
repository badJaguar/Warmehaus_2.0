import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.opening-hours li').eq(new Date().getDay() - 1).addClass('today');
      });
  }
}

