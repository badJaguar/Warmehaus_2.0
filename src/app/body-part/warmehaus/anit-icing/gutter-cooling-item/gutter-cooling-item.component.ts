import { Component, OnInit } from '@angular/core';
import { ITermostat } from '../../../../../models/IMatTebleItem.interface';
import { ActivatedRoute } from '@angular/router';
import { CanonicalService } from '../../../../../services/canonical.service';
import { ELEMENT_ANTI_ICING_SYSTEMS_DATA } from '../../../../../data/warmehaus/anti-icing/anti-icing-systems-data';

@Component({
  selector: 'app-gutter-cooling-item',
  templateUrl: './gutter-cooling-item.component.html',
  styleUrls: ['./gutter-cooling-item.component.scss']
})
export class GutterCoolingItemComponent implements OnInit {
  public itemId = +this.route.snapshot.paramMap.get('id');
  public currentItem: ITermostat;

  constructor(private route: ActivatedRoute, private metaService: CanonicalService) {
  }
  ngOnInit() {
    this.metaService.createCanonicalURL();
    this.currentItem = this.getItem(this.itemId);
  }

  public getItem = (id: number) => {
    const data = ELEMENT_ANTI_ICING_SYSTEMS_DATA;
    const filtered = data.filter(x => x.id === id);
    if (filtered) {
      return filtered[0];
    }
  }
}
