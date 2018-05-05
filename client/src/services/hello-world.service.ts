import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

    private data: any;

    constructor(){
      this.data = {
        message: 'Hello World Component'
      };
    }

    getData(){
      return this.data;
    }
}
