import { StorageService } from '../services/storage/storage.service';

export abstract class BaseModel {
  protected table;
  protected timestamp;

  constructor(protected storage: StorageService) {}

  getAll(): Array<any> {
    return  this.storage.get(this.table) !== null ?  this.storage.get(this.table).filter(el => !el.deleted) : [];
  }

  getCurrentTimestamp(): number {
    return Date.now();
  }

  create(abstractObj: any) {
    let tableResults = this.getAll();
    if (tableResults.length <= 0) {
      tableResults = [];
    }

    abstractObj.id = tableResults.length + 1;
    abstractObj.timestamp = this.getCurrentTimestamp();
    tableResults.push(abstractObj);
    this.storage.save(this.table, tableResults);
  }

  getById(id: number) {
    // tslint:disable-next-line: triple-equals
    return this.getAll().find(el => el.id == id);
  }

  update(abstractObj: any) {
    const tableResults = this.getAll();
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
