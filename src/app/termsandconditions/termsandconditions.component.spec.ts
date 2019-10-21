import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandconditionsComponent } from './termsandconditions.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('TermsandconditionsComponent', () => {
  let component: TermsandconditionsComponent;
  let fixture: ComponentFixture<TermsandconditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsandconditionsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
