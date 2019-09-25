import { TestBed, inject } from '@angular/core/testing';
import { UserService } from '../user/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should be return some user', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.getUser()).toBeDefined();
  });

  it('should be return array of projects', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.getProjects()).toBeDefined();
  });

});
