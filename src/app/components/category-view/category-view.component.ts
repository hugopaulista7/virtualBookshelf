import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookController } from 'src/app/controllers/book.controller';
import { CategoryInterface } from 'src/app/model/category/category.interface';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.sass']
})
export class CategoryViewComponent implements OnInit {
  @Input() category: CategoryInterface;
  public bookController: BookController;
  public view = false;
  constructor(
    protected activatedRoute: ActivatedRoute,
    protected router: Router
  ) {
    this.bookController = new BookController();
  }

  ngOnInit(): void {
    if (this.category === undefined) {
      this.view = true;
      this.category = this.bookController.getByCategory(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log(this.category);
    }
  }

}
