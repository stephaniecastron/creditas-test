import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from './search';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('q', searchTerm)
      .set('sort', 'updated')
      .set('order', 'asc')
    return this.http.get('https://api.github.com/search/repositories', { params })
      .pipe(
        map((res) => res as SearchResponse)
      );
  }
}
