import { Validators } from '@angular/forms';

export const rules = {
  body: ['', Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(240)
  ])],
  author: ['Local User', Validators.compose([
    Validators.required
  ])],
  timestamp: [Date.now(), Validators.compose([
    Validators.required
  ])],
  deleted: [false, Validators.compose([Validators.required])]
};


export const answerRules = Validators.compose([Validators.required]
);
