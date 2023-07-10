import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentoneComponent } from './componentone/componentone.component';
import { ComponenttwoComponent } from './componenttwo/componenttwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentoneComponent,
    ComponenttwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
