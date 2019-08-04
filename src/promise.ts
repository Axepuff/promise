export default class Promise {
  readonly execute: Function;
  private isResolved: boolean = false;
  private thenList: Array<Function> = [];
  private resolveData: any;

  constructor(execute: (resolve: (data?: any) => void, reject: (data?: any) => void) => any) {
    execute(this.resolve, this.reject);
  }

  public resolve(data?: any) {
    this.isResolved = true;
    this.resolveData = data;
    this.thenList.forEach(cb => cb(this.resolveData));
  }

  public reject(data?: any) {

  }

  then(cb) {
    if (typeof cb === 'function') {
      this.thenList.push(cb);
      if (this.isResolved) {
        cb(this.resolveData);
      }
    }
    return this;
  }
}