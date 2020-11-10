import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TodoWebService } from './todo-web.service';

describe('TodoWebService', () => {
  let service: TodoWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodoWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
