import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { ListBarComponent } from './components/list-bar/list-bar.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
import * as reload from './store/reducers/reload.reducers';
import * as filter from './store/reducers/filter.reducers';
import { ReloadEffects } from './store/effects/reload.effects';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { FilterEffects } from './store/effects/filter.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksListComponent,
    CategoriesListComponent,
    BookItemComponent,
    ListBarComponent,
    BookViewComponent,
    HomeComponent,
    CategoryItemComponent,
    CategoryViewComponent,
    BackButtonComponent,
    ModalComponent,
    BookCreateComponent,
    FloatButtonComponent,
    CommentsListComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      reload: reload.reducer,
      filter: filter.reducer
    }),
    EffectsModule.forRoot([ReloadEffects, FilterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
