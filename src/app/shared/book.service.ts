import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() {}

  getBook(): Book {
    return {
      title: 'Title',
      author: 'Author'
    };
  }
}
