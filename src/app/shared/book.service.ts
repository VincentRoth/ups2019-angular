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

  getBooks(): Book[] {
    return [
      {
      title: 'Title',
      author: 'Author'
      },{
      title: 'Title2',
      author: 'Author2'
      }
  ];
  }
}
