import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledashboardComponent } from './mobiledashboard.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/database";

describe('MobiledashboardComponent', () => {
  let component: MobiledashboardComponent;
  let fixture: ComponentFixture<MobiledashboardComponent>;

  let subscribeMock = { subscribe: jasmine.createSpy(('subscribe')).and.returnValue([]) };
  let valueChangesMock = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(subscribeMock)
  };
  let db = {
    list: jasmine.createSpy('list').and.returnValue(valueChangesMock)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        MobiledashboardComponent, {
          provide: AngularFireDatabase,
          useValue: db
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
