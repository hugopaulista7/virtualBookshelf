import { Component, OnInit, Input } from '@angular/core';
import { BookInterface } from 'src/app/model/book/book.interface';
import { CommentsController } from 'src/app/controllers/comments.controller';
import { CommentInterface } from 'src/app/model/comment/comment.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { rules } from './comments.validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookController } from 'src/app/controllers/book.controller';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.sass']
})
export class CommentsListComponent implements OnInit {
  @Input() book: BookInterface;
  commentsController: CommentsController = new CommentsController();
  comments: Array<CommentInterface>;
  form: FormGroup;
  bookController: BookController = new BookController();
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    protected commentsService: CommentService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(rules);
    this.getComments();
    this.awaitCommentsChange();
  }

  getComments() {
    this.comments = this.commentsController.getAllByBook(this.book.id).sort(this.bookController.orderByDate).filter(el => !el.parentId);
  }

  createComment() {
    if (this.form.invalid) {
      this.snackBar.open('Invalid comment!', null, {duration: 2000});
      return ;
    }
    const formObj: CommentInterface = {
      author: this.form.controls.author.value,
      body: this.form.controls.body.value,
      timestamp: Date.now(),
      deleted: false,
      bookId: this.book.id
    };
    this.saveComment(formObj);
  }

  saveComment(formObj: CommentInterface) {
    const result = this.commentsController.saveComment(formObj);
    if (result) {
      this.getComments();
      this.form.controls.body.reset();
      this.snackBar.open('Comment created successfuly!', null, {duration: 2000});
    }
  }

  awaitCommentsChange() {
    this.commentsService.subject$.subscribe((res: Array<CommentInterface>) => {
      if (res) {
        this.comments = res;
      }
    });
  }

  getCommentsLength() {
    return this.commentsController.getAllByBook(this.book.id).filter(el => !el.deleted).length;

  }

}
