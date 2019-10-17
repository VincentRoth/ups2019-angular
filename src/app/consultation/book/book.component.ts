import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() deleteEvent: EventEmitter<Book>;

  constructor() {
    this.deleteEvent = new EventEmitter();
  }

  ngOnInit() {}

  onDelete() {
    this.deleteEvent.emit(this.book);
  }
}
