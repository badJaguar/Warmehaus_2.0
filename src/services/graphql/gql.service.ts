import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { R } from 'apollo-angular/types';
import { WatchQueryOptions } from 'apollo-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IItem } from '../../models/IItem.interface';

@Injectable({
  providedIn: 'root'
})

export class GraphQlService {
  constructor(private apollo: Apollo) { }

  items: Observable<IItem[]>;

  getItems = (queryModelType: WatchQueryOptions<R>, type: keyof QueryModel): Observable<IItem[]> => {
    return this.items = this.apollo.watchQuery<QueryType, R>({ ...queryModelType })
      .valueChanges.pipe(map(result => {
        const res = result.data;
        return res;
      })).pipe(map((result) => result.floors[1][type] as IItem[]));
  }
}

export class QueryModel {
  films: IItem[];
  cab14W: IItem[];
}

export class QueryType {
  floors: QueryModel;
}

export const propertyOf = <TObj>(name: keyof TObj) => name;
