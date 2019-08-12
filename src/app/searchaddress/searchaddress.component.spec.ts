import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchaddressComponent} from './searchaddress.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {AngularFireDatabase} from "@angular/fire/database";
declare const google: any;

describe('SearchaddressComponent', () => {
    let component: SearchaddressComponent;
    let fixture: ComponentFixture<SearchaddressComponent>;
    // var google = {
    //     maps: {
    //         places: {
    //             Autocomplete: function () {
    //             }
    //         },
    //         Marker: function () {
    //         },
    //         InfoWindow: function () {
    //         }
    //     }
    // };
    class MockSign {
        from: "lehae";
        destination: "jozi";
        downloadUrl: "www.google.com"
    };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchaddressComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                SearchaddressComponent, FormBuilder,
                {
                    provide: AngularFireDatabase,
                    useClass: MockSign
                }
                // {
                //     provide: google,
                //     useValue: google
                // }
            ],
            imports: [RouterTestingModule]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchaddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
