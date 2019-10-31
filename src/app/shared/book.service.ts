import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }
}
