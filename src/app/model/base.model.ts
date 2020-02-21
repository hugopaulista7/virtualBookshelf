import { StorageService } from '../services/storage/storage.service';

export abstract class BaseModel {
  protected table;
  protected timestamp;

  constructor(protected storage: StorageService) {}

  all(): Array<any> {
    return this.storage.get(this.table) !== null ?  this.storage.get(this.table) : [];
  }

  getAll() {
    return this.all().filter(el => !el.deleted);
  }

  getCurrentTimestamp(): number {
    return Date.now();
  }

  create(abstractObj: any) {
    const savingObj = {...abstractObj};
    let tableResults = this.all();
    if (tableResults.length <= 0) {
      tableResults = [];
    }

    savingObj.id = tableResults.length + 1;
    savingObj.timestamp = this.getCurrentTimestamp();
    console.log(savingObj);
    tableResults.push(savingObj);
    this.storage.save(this.table, tableResults);
  }

  getById(id: number) {
    // tslint:disable-next-line: triple-equals
    return this.all().find(el => el.id == id);
  }

  update(abstractObj: any) {
    const tableResults = this.all();
    tableResults[tableResults.findIndex(el => el.id === abstractObj.id)] = abstractObj;
    this.storage.save(this.table, tableResults);
  }

  delete(id: number) {
    const abstractObj = this.getById(id);
    abstractObj.deleted = true;
    this.update(abstractObj);
  }

  parseDate() {
    const date = new Date(this.timestamp);
    return date.toString();
  }
}
