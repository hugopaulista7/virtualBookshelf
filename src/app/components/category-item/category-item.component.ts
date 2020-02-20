import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.sass']
})
export class CategoryItemComponent implements OnInit {
  @Input() category;
  constructor(
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

  viewCategory() {
    this.router.navigate(['category/' + this.category.id]);
  }
}
