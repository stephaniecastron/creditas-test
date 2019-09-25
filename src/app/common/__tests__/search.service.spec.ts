import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchService } from '../search/search.service';


describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });

  it('should be return search', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service.search('ngx')).toBeDefined();
  });

});
