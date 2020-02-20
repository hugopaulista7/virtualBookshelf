import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.sass']
})
export class BackButtonComponent implements OnInit {

  constructor(
    protected router: Router
  ) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['/']);
  }
}
