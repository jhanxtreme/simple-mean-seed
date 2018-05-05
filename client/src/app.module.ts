import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { HelloWorldComponent } from './component/hello-world/hello-world.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    HelloWorldComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
