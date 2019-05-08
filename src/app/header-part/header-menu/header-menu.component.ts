import { PhonesSheetComponent } from '../../footer-part/phones-sheet/phones-sheet.component';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {

  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  brand = 'assets/images/logo2.png';

  constructor(private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(PhonesSheetComponent);
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
  ngOnInit(): void {
  }
}
