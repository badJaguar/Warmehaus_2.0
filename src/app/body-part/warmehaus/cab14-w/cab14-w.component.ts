import { OnInit, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { hideLoader } from '../../../../../src/helpers';
import { WarmehausService } from '../../../../../src/services/warmehaus/warmehaus.service';
import { IItem } from '../../../../models/IItem.interface';
import { MetaCab14Watt } from '../../../seo/open-graph/warmehaus/meta-data-cab-14Watt';

const compareFn = (a: IItem, b: IItem) => {
  if (a.price < b.price)
    return -1;
  if (a.price > b.price)
    return 1;
  return 0;
};

@Component({
  selector: 'app-cab14-w',
  templateUrl: './cab14-w.component.html',
  styleUrls: ['./cab14-w.component.scss'],
  providers: [MetaCab14Watt]
})
export class Cab14WComponent implements OnInit {
  gqlService: Observable<IItem[]>;
  cableSource = new MatTableDataSource([]);

  constructor(private meta: Meta, private tag: MetaCab14Watt, private service: WarmehausService) {
    this.meta.addTags([
      { name: this.tag.keywords, content: this.tag.keywordsContent },
      { name: this.tag.description, content: this.tag.descriptionContent },
      { property: this.tag.ogTitle, content: this.tag.ogTitleContent },
      { property: this.tag.ogDescription, content: this.tag.ogDescriptionContent },
      { property: this.tag.ogType, content: this.tag.ogTypeContent },
      { property: this.tag.ogImage, content: this.tag.ogImageContent },
      { property: this.tag.ogUrl, content: this.tag.ogUrlContent }
    ]);
  }

  displayedColumns: string[] = ['description', 'nominal', 'price'];

  ngOnInit() {
    this.service.getPosts({
      brandKey: 'warmehaus',
      typeKey: 'cable'
    }).subscribe(values => {
      if (values.length) {
        hideLoader();
      }
      this.cableSource.data = values.sort(compareFn);
    });
  }

  applyFilter(filterValue: string) {
    this.cableSource.filter = filterValue.trim().toLowerCase();
  }
}
