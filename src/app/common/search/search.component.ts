import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, map, catchError, distinctUntilChanged, finalize } from 'rxjs/operators';
import { SearchService } from './search.service';
import { Item } from './search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public githubSearch$: Observable<Array<Item>> = null;
  public searchControl = new FormControl();
  public loading: boolean;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.githubSearch$ = this.searchControl
      .valueChanges.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(value => {
          if (value !== '') {
            return this.search(value);
          } else {
            return of(null);
          }
        })
      );
  }

  search(value: string): Observable<Array<Item>> {
    this.loading = true;
    return this.searchService.search(value.toLowerCase())
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
        map((response) => response.items),
        catchError((err) => of(null))
      );
  }
}
