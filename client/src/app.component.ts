import { Component } from '@angular/core';

import { HelloWorldComponent } from './component/hello-world/hello-world.component';

@Component({
    selector: 'my-app',
    template: `
        <hello-world-component></hello-world-component>
    `
})
export class AppComponent {} 
