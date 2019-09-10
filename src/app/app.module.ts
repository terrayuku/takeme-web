import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {TakemeModule} from "./takeme/takeme.module";
import {environment} from "../environments/environment";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { MobileviewComponent } from './mobileview/mobileview.component';
import { MobiledashboardComponent } from './mobiledashboard/mobiledashboard.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    TakemeModule,
    AngularFireModule.initializeApp(environment.firebase, 'takeme'),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    AboutComponent,
    MobileviewComponent,
    MobiledashboardComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
