import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { R } from 'apollo-angular/types';
import { WatchQueryOptions } from 'apollo-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IItem } from 'src/models/IItem.interface';

@Injectable({
  providedIn: 'root'
})

export class GraphQlService {
  constructor(private apollo: Apollo) {
  }

  items: Observable<IItem[]>;

  initQuery = (queryModelType: WatchQueryOptions<R>): Observable<IItem[]> => {
    return this.items = this.apollo.watchQuery<Query>({ ...queryModelType })
      .valueChanges.pipe(map(result => result.data.items));
  }
}

export class Query {
  items: IItem[];
}
