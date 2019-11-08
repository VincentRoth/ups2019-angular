import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './author';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(`/api/authors/${id}`);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('/api/authors');
  }

  create(author: Author): Observable<Author> {
    return this.http.post<Author>('/api/authors', author);
  }

  update(author: Author): Observable<Author> {
    return this.http.put<Author>(`/api/authors/${author.id}`, author);
  }

  delete(id: number): Observable<Author> {
    return this.http.delete<Author>(`/api/authors/${id}`);
  }
}
