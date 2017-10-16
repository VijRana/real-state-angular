import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import {HttpModule} from '@angular/http';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { FormsModule } from '@angular/forms';
import {CripService  } from './crip-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
