import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => (this.books = books));
  }

  onBookDelete(book: Book) {
    const bookIndex = this.books.indexOf(book);
    this.books.splice(bookIndex, 1);
  }
}
