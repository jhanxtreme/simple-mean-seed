import { Component } from '@angular/core';

@Component({
    selector: 'home-component',
    template: `
        <h1>Welcome to the Home section</h1>
        <p>This is the homepage of the simple mean stack application.</p>
    `,
    styles: [`
        h1{
            text-align:justify;
        }
    `]
})
export class HomeComponent {
    
}