import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from '../../models/IItem.interface';


type PostsParams = {
  brandKey: string;
  typeKey: string;
};

@Injectable({
  providedIn: 'root'
})
export class WarmehausService {
  private url = 'https://warmehouse-be.herokuapp.com/floors/filterByParams';

  constructor(private httpClient: HttpClient) { }

  getPosts({ brandKey, typeKey }: PostsParams): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>(`${this.url}`, {
      params: { brandKey, typeKey }
    });
  }
}

export const propertyOf = <TObj>(name: keyof TObj) => name;
