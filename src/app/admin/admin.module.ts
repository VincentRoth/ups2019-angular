import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminRootComponent,
    children: [
      { path: 'book', component: BookEditComponent },
      { path: 'author', component: AuthorEditComponent }
    ]
  }
];

@NgModule({
  declarations: [AdminRootComponent, BookEditComponent, AuthorEditComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AdminModule {}
