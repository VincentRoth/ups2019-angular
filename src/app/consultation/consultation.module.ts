import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BookDisplayComponent } from './book-display/book-display.component';
import { DevantureComponent } from './devanture/devanture.component';

const routes: Routes = [
  {
    path: 'consultation',
    component: DevantureComponent,
    children: [
      { path: '', component: BookListComponent },
      { path: 'book/:id', component: BookDisplayComponent }
    ]
  }
];

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookDisplayComponent,
    DevantureComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: []
})
export class ConsultationModule {}
