import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.book = { title: null, author: null };
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.bookService
          .getBook(parseInt(id, 10))
          .subscribe(book => (this.book = book));
      }
    });
  }

  onSubmit() {
    const saveObserver = {
      complete: () => this.router.navigate(['/consultation'])
    };
    if (this.book.id) {
      this.bookService.update(this.book).subscribe(saveObserver);
    } else {
      this.bookService.create(this.book).subscribe(saveObserver);
    }
  }
}
