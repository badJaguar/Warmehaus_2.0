import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqare-calculator',
  templateUrl: './sqare-calculator.component.html',
  styleUrls: ['./sqare-calculator.component.scss']
})
export class SqareCalculatorComponent implements OnInit {

  constructor() { }
  public a;
  public b;
  public sqare: number;

  ngOnInit() {

  }

  public changeA(a) {
    const res = Number.parseFloat(a.target.value);
    this.a = res;
    console.log(this.a);
    return res;
  }
  public changeB(b) {
    const res = Number.parseFloat(b.target.value);
    this.b = res;
    console.log(this.b);
    return res;
  }
  public setSqare(a, b) {
    a = this.a;
    b = this.b;
    return this.sqare = a + b;
  }
}
