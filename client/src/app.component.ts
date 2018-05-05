import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <a routerLink="home" routerLinkActive="active">Home</a> | 
            <a routerLink="about" routerLinkActive="active">About</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [`
        a{
            text-decoration: none;
            color:#222;
        }
        .active{
            border-bottom: 2px red solid;
        }
    `]
})
export class AppComponent {} 
