import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookCreateComponent } from '../book-create/book-create.component';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/reload.reducers';
import { Reload } from 'src/app/store/actions/reload.actions';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.sass']
})
export class FloatButtonComponent implements OnInit {
  constructor(
    protected modal: MatDialog,
    protected store: Store<State>
  ) { }

  ngOnInit(): void {
  }

  showCreationModal() {
    const dialog = this.modal.open(BookCreateComponent);
    dialog.afterClosed().subscribe(res => {
      if (res.reload) {
        this.store.dispatch(new Reload({reload: true}));
      }
    });
  }
}
