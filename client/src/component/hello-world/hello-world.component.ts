import { Component } from '@angular/core';
@Component({
    selector: 'hello-world-component',
    template: `
        <div class="hello-world">
            <h1>{{ msg }}</h1>
            <p>This is simple angular webpack seed.</p>
        </div>
    `,
    styles: [`
        .hello-world{
            border: 1px #ddd solid;
            border-radius: 4px;
            text-align: center;
        }
    `]
})
export class HelloWorldComponent {

    public msg: string;

    constructor(){
        this.msg = 'Hello World Component!'
    }

}