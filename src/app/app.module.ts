import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBar1Component } from './side-bar1/side-bar1.component';
import { SideBar2Component } from './side-bar2/side-bar2.component';
import { MiddleSideComponent } from './middle-side/middle-side.component';
import { NavBarComponent } from './middle-side/nav-bar/nav-bar.component';
import { ContentFeedsComponent } from './middle-side/content-feeds/content-feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBar1Component,
    SideBar2Component,
    MiddleSideComponent,
    NavBarComponent,
    ContentFeedsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
