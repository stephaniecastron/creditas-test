import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '../header.component';
import { SearchModule } from 'src/app/common/search/search.module';
import { MockModule } from 'ng-mocks';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(SearchModule),
        MockModule(MatToolbarModule),
        MockModule(MatInputModule),
        MockModule(MatIconModule),
      ],
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
