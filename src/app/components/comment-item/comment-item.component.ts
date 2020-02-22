import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CommentInterface } from 'src/app/model/comment/comment.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/modal/modal.component';
import { State } from 'src/app/store/reducers/comments.reducers';
import { Store } from '@ngrx/store';
import { Delete, Edit } from 'src/app/store/actions/comments.actions';
import { timer } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentsController } from 'src/app/controllers/comments.controller';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { answerRules, rules } from '../comments-list/comments.validators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.sass']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: CommentInterface;
  @ViewChild('input') input: ElementRef;
  edit = false;
  answers: Array<CommentInterface>;
  commentsController: CommentsController = new CommentsController();
  answerForm: FormGroup;
  constructor(
    private dialog: MatDialog,
    protected store: Store<State>,
    protected snack: MatSnackBar,
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.answerForm = this.formBuilder.group(rules);
    this.answerForm.addControl('parentId', new FormControl('', answerRules));
    this.getAnswers();
  }

  getAnswers() {
    this.answers = this.commentsController.getAnswers(this.comment.id);
  }

  parseDate(date) {
    const humanDate = new Date(date);
    return `${humanDate.getMonth()}/${humanDate.getDate()}/${humanDate.getFullYear()} ${humanDate.getHours()}:${humanDate.getMinutes()}`;
  }

  delete() {
    const dialog = this.dialog.open(ModalComponent, {
      data: {
        header: 'Delete comment',
        message: 'Do you really want do delete this comment?',
        confirmHandler: () => {
          this.store.dispatch(new Delete(this.comment));
          dialog.close();
        }
      }
    });

    dialog.afterClosed().subscribe(res => {
    });
  }

  toggleEdit() {
    this.edit = !this.edit;
    timer(100).subscribe(() => this.edit ? this.input.nativeElement.focus() : this.input.nativeElement.blur());
  }

  update() {
    this.store.dispatch(new Edit(this.comment));
    this.snack.open('Comment updated successfuly!', null, {duration: 2000});
  }

  answer() {
    this.answerForm.controls.parentId.setValue(this.comment.id);
    if (this.answerForm.invalid) {
      this.snack.open('Invalid answer!', null, {duration: 2000});
      return ;
    }
    const formObj: CommentInterface = {
      author: this.comment.author,
      body: this.answerForm.controls.body.value,
      timestamp: Date.now(),
      deleted: false,
      bookId: this.comment.bookId,
      parentId: this.comment.id
    };
    this.commentsController.saveComment(formObj);
    this.answerForm.controls.body.reset();
    this.getAnswers();
  }
}
