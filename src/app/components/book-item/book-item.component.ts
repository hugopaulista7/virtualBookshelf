import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.sass']
})
export class BookItemComponent implements OnInit {

  @Input() book;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  open() {
    this.router.navigate(['book/' + this.book.id]);
  }

}
