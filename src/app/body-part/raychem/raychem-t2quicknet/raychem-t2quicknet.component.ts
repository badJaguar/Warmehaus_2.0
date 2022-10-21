import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IItem } from 'src/models/IItem.interface';
import { WarmehausService } from 'src/services/warmehaus/warmehaus.service';


const compareFn = (a: IItem, b: IItem) => {
  if (a.price < b.price)
    return -1;
  if (a.price > b.price)
    return 1;
  return 0;
};

@Component({
  selector: 'app-raychem-t2quicknet',
  templateUrl: './raychem-t2quicknet.component.html',
  styleUrls: ['./raychem-t2quicknet.component.scss']
})
export class RaychemT2quicknetComponent implements OnInit {

  constructor(private service: WarmehausService) { }

  displayedColumns: string[] = ['description', 'nominal', 'price'];
  matsSource = new MatTableDataSource([]);


  ngOnInit() {
    this.service.getPosts({
      brandKey: 'raychem',
      typeKey: 'mats'
    }).subscribe(values => {
      this.matsSource.data = values.sort(compareFn);
    });
  }


  applyFilter(filterValue: string) {
    this.matsSource.filter = filterValue.trim().toLowerCase();
  }
}
