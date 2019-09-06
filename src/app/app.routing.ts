import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {TakemeComponent} from "./takeme/takeme.component";
import {DisplaysignComponent} from "./displaysign/displaysign.component";
import {AddsignfordirectionsComponent} from "./addsignfordirections/addsignfordirections.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AboutComponent} from "./about/about.component";
import {MobileviewComponent} from "./mobileview/mobileview.component";
import {MobiledashboardComponent} from "./mobiledashboard/mobiledashboard.component";

const routes: Routes =[
  {
    path: '',
    component: AboutComponent,
    children: [{
      path: '',
      loadChildren: './takeme/takeme.module#TakemeModule'
    }]
  }, {
    path: 'display/sign',
    component: DisplaysignComponent,
    children: [{
      path: '',
      loadChildren: './takeme/takeme.module#TakemeModule'
    }]
  }, {
    path: 'add/sign',
    pathMatch: 'full',
    component: AddsignfordirectionsComponent,
    children: [{
      path: '',
      loadChildren: './takeme/takeme.module#TakemeModule'
    }]
  }, {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    children: [{
      path: '',
      loadChildren: './takeme/takeme.module#TakemeModule'
    }]
  }, {
    path: 'about',
    pathMatch: 'full',
    component: MobileviewComponent,
    children: [{
      path: '',
      loadChildren: './takeme/takeme.module#TakemeModule'
    }]
  }, {
    path: 'mobile-dashboard',
    pathMatch: 'full',
    component: MobiledashboardComponent,
    children: [{
      path: '',
      loadChildren: './takeme/takeme.module#TakemeModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
