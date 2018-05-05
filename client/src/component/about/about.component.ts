import { Component } from '@angular/core';

@Component({
    selector: 'about-component',
    template: `
        <h1>About Section</h1>
        <p>This is the about page.</p>
    `,
    styles: [`
        h1{
            text-align:justify;
        }
    `]
})
export class AboutComponent {
    
}