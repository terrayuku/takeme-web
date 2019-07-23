import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsignfordirectionsComponent } from './addsignfordirections.component';
import {RouterTestingModule} from "@angular/router/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('AddsignfordirectionsComponent', () => {
  let component: AddsignfordirectionsComponent;
  let fixture: ComponentFixture<AddsignfordirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsignfordirectionsComponent ],
      imports: [ RouterTestingModule ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsignfordirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
