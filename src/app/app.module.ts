import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

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
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
