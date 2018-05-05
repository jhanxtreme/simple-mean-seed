import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { PageNotFoundComponent} from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent
  ],
  entryComponents:[
    //dynamic components goes here...
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }
