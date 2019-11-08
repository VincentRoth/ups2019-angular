import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/shared/author.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Author } from 'src/app/shared/author';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
  authorForm: FormGroup;

  constructor(private authorService: AuthorService) {
    this.authorForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {}

  onSubmit() {
    const authorModel: Author = this.authorForm.value;
    this.authorService.create(authorModel).subscribe({
      complete: () => this.authorForm.reset()
    });
  }
}
