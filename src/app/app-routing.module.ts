import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRootComponent } from './admin/admin-root/admin-root.component';
import { BookEditComponent } from './admin/book-edit/book-edit.component';
import { AuthorEditComponent } from './admin/author-edit/author-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'consultation',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(tsModule => tsModule.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
