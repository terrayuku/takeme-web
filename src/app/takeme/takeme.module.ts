import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TakemeRoutingModule } from './takeme-routing.module';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {TakemeComponent} from "./takeme.component";
import { DisplaysignComponent } from '../displaysign/displaysign.component';
import {AddsignfordirectionsComponent} from "../addsignfordirections/addsignfordirections.component";

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(TakemeRoutingModule),
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
    ],
  declarations: [
      TakemeComponent,
      DisplaysignComponent,
      AddsignfordirectionsComponent
  ],
    schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class TakemeModule { }
