import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TakemeComponent} from './takeme.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/database";
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder} from "@angular/forms";

describe('TakemeComponent', () => {
    let component: TakemeComponent;
    let fixture: ComponentFixture<TakemeComponent>;
    class MockSign {
        from: "lehae";
        destination: "jozi";
        downloadUrl: "www.google.com"
    };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TakemeComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                    TakemeComponent, FormBuilder,
                {
                    provide: AngularFireDatabase,
                    useClass: MockSign
                }
            ],
            imports: [ RouterTestingModule ]
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
