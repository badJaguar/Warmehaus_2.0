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
  constructor(private apollo: Apollo) { }

  items: Observable<IItem[]>;

  getItems = (queryModelType: WatchQueryOptions<R>, type: keyof QueryType): Observable<IItem[]> => {
    return this.items = this.apollo.watchQuery<QueryType>({ ...queryModelType })
      .valueChanges.pipe(map(result => result.data[type]));
  }
}

export class QueryType {
  films: IItem[];
  cab14W: IItem[];
}
export const propertyOf = <TObj>(name: keyof TObj) => name;
