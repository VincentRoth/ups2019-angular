import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('BookService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

  it('should request book list', () => {
    const httpMock = TestBed.get(HttpTestingController);
    const service: BookService = TestBed.get(BookService);

    service
      .getBooks()
      .subscribe(books => expect(Array.isArray(books)).toBeTruthy());

    const req = httpMock.expectOne('/api/books');

    req.flush([{ id: 1, title: 'Test', author: 'Author' }]);

    httpMock.verify();
  });
});
