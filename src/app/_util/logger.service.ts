import { Injectable } from '@angular/core';
@Injectable()

export class LoggerService {
  debug(msg: any) {
    console.log(new Date() + ': ' + JSON.stringify(msg));
  }
  info(msg: any) {
    console.log(new Date() + ': ' + JSON.stringify(msg));
  }
  error(msg: any) {
    console.log(new Date() + ': ' + JSON.stringify(msg));
  }
}
