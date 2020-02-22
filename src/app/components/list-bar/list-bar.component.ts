import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { debounce } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/filter.reducers';
import { Filter } from 'src/app/store/actions/filter.actions';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'list-bar',
  templateUrl: './list-bar.component.html',
  styleUrls: ['./list-bar.component.sass']
})
export class ListBarComponent implements AfterViewInit {
  @ViewChild('input') input: ElementRef;
  @ViewChild('select') select: ElementRef;
  currentFilter = 'title';
  currentSearch = '';
  search$;
  filter$;
  constructor(
    protected store: Store<State>
  ) { }


  ngAfterViewInit() {
    this.search$ = fromEvent(this.input.nativeElement, 'input').pipe(debounce(() => interval(300)));
    this.filter$ = fromEvent(this.select.nativeElement, 'change');
    this.awaitEvents();
  }

  awaitEvents() {
    this.filter$.subscribe((event: any) => {
      this.currentFilter = event.target.value;
      this.store.dispatch(new Filter({filter: this.currentFilter, search: this.currentSearch}));
    });
    this.search$.subscribe((event: any) => {
      this.currentSearch = event.target.value;
      this.store.dispatch(new Filter({filter: this.currentFilter, search: this.currentSearch}));
    });
  }


}
