import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public save(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  public get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
