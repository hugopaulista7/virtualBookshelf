import { Validators } from '@angular/forms';

export const rules = {
  title: ['', Validators.compose([
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(255)
  ])],
  author: ['', Validators.compose([
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(255)
  ])],
  timestamp: [Date.now(), Validators.compose([
    Validators.required
  ])],
  description: ['', Validators.compose([
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(600)
  ])],
  category: 0,
  deleted: false
};
