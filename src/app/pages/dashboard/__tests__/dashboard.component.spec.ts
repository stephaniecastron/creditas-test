import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from '../dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MockModule } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MockModule(MatGridListModule),
        MockModule(FlexLayoutModule),
        MockModule(MatCardModule),
        MockModule(MatTabsModule),
        MockModule(MatListModule),
        MockModule(MatDividerModule),
        MockModule(MatChipsModule),
        MockModule(MatRippleModule),
        MockModule(MatIconModule),
        HttpClientTestingModule
      ],
      declarations: [DashboardComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be return the user', () => {
    expect(component.getUser()).toBeDefined();
  });

  it('should be return the user projects', () => {
    expect(component.getProjects()).toBeDefined();
  });

});
