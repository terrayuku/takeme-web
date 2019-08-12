import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TakemeComponent} from './takeme.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('TakemeComponent', () => {
    let component: TakemeComponent;
    let fixture: ComponentFixture<TakemeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TakemeComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TakemeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
