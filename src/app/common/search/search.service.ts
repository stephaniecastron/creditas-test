import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse, Item } from './search';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<Array<Item>> {
    const params = new HttpParams()
      .set('q', searchTerm)
      .set('sort', 'updated')
      .set('direction', 'asc');
    return this.http.get(`https://api.github.com/users/${searchTerm}/repos`)
      .pipe(
        map((res) => res as Array<Item>)
      );
  }
}
