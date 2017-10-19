import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    static log(type: string, msg: string) {
    }

    static error(msg: string) {
        console.error(msg);
    }
}