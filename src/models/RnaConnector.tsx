
export default class RnaConnector {
  private static _instance: RnaConnector | null = null;
  private _queue: { url: string; xhr: XMLHttpRequest }[] = [];

  private constructor() {
    this.sendRequest();
  }

  public static getInstance(): RnaConnector {
    return this._instance
      ? this._instance
      : (this._instance = new RnaConnector());
  }

  public addToQueue(obj: { url: string; xhr: XMLHttpRequest }) {
    if (obj) this._queue.push(obj);
  }

  private async sendRequest(): Promise<void> {
    let obj = this._queue.shift();

    if (typeof obj !== "undefined") {
      obj.xhr.open("GET", obj.url);
      obj.xhr.send();
      // console.log(`sending : ${obj.url}`);
    }
    return new Promise(() => setTimeout(() => this.sendRequest(), 150));
  }
}
