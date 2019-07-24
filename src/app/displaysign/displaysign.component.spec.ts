import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DisplaysignComponent} from './displaysign.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Component, Directive, inject, NO_ERRORS_SCHEMA} from "@angular/core";
import {Router, RouterLinkWithHref} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {By} from "@angular/platform-browser";

@Component({selector: 'app-navigation', template: ''})
class NavigationStubComponent {
}
let route = {
    getCurrentNavigation: jasmine.createSpy('getCurrentNavigation'),
    navigateByUrl: jasmine.createSpy("design/sign")
};
class RouterStub {
    navigateByUrl(url: string) {
        return url;
    }

    getCurrentNavigation() {
        return {
            "extras": {
                "queryParams": {
                    'from': JSON.stringify("lehae"),
                    'destination': JSON.stringify("jozi"),
                    'downloadUrl': JSON.stringify("ww.google.com")
                }
            }
        };
    }
}

@Component({
    template: `<button routerLink="/">Got it </button>
    <router-outlet></router-outlet>`
})
class DummyComponent {}

@Directive({
    selector: '[routerLink], [routerLinkActive]'
})
class DummyRouterLinkDirective {}

describe('DisplaysignComponent', () => {
    let component: DisplaysignComponent;
    let fixture: ComponentFixture<DisplaysignComponent>;
    route.getCurrentNavigation.and.returnValue({
        "extras": {
            "queryParams": {
                'from': JSON.stringify("lehae"),
                'destination': JSON.stringify("jozi"),
                'downloadUrl': JSON.stringify("ww.google.com")
            }
        }
    });
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DisplaysignComponent, DummyComponent, DummyRouterLinkDirective],
            imports: [RouterTestingModule],
            providers: [
                {provide: Router, useValue: route}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisplaysignComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        // const spy = spyOn(router, 'navigateByUrl');

        expect(component).toBeTruthy();
    });
});
