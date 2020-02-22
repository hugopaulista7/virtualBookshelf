import { Component, OnInit, ViewChild } from '@angular/core';
import { debounce } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'list-bar',
  templateUrl: './list-bar.component.html',
  styleUrls: ['./list-bar.component.sass']
})
export class ListBarComponent implements OnInit {
  @ViewChild('input') input;
  search$;
  constructor() { }

  ngOnInit(): void {
    // this.search$ = fromEvent()
    console.log(this.input);
  }


}
