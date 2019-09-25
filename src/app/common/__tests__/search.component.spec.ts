import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from '../search/search.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockModule } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(MatAutocompleteModule),
        MockModule(ReactiveFormsModule),
        MockModule(MatProgressSpinnerModule),
        HttpClientTestingModule
      ],
      declarations: [SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be return search', () => {
    expect(component.search('ngx')).toBeDefined();
  });
});
