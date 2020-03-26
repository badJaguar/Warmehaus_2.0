import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { R } from 'apollo-angular/types';
import { WatchQueryOptions } from 'apollo-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IItem } from '../../models/IItem.interface';
import { RootQueryType } from './query-model-types/root-query-type.model';
import { FloorsKind, ModelType } from './query-model-types/warmehaus-query-models';

interface IDataQuery {
  readonly queryModelType: WatchQueryOptions<R>;
  readonly floorsKind: keyof FloorsKind;
  readonly model: keyof ModelType;
}

@Injectable({
  providedIn: 'root'
})
export class GraphQlService {
  constructor(private apollo: Apollo) { }

  items: Observable<IItem[]>;

  getItems = (query: IDataQuery): Observable<IItem[]> => {
    return this.items = this.apollo.watchQuery<RootQueryType, R>({ ...query.queryModelType })
      .valueChanges.pipe(map(result => {
        const data = result.data.floors[query.floorsKind][query.model];
        return data;
      }));
  }
}

export const propertyOf = <TObj>(name: keyof TObj) => name;
