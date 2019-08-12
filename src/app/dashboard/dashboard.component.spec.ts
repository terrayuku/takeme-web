import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {AngularFireDatabase} from "angularfire2/database";
import {RouterTestingModule} from "@angular/router/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";

class MockSign {
    from: "lehae";
    destination: "jozi";
    downloadUrl: "www.google.com"
};

const angularFireDatabaseMock = {
    db: {
        list: []
    }
};

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let subscribeMock = { subscribe: jasmine.createSpy(('subscribe')).and.returnValue([]) };
    let valueChangesMock = {
        valueChanges: jasmine.createSpy('valueChanges').and.returnValue(subscribeMock)
    };
    let db = {
        list: jasmine.createSpy('list').and.returnValue(valueChangesMock)
    };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                DashboardComponent, {
                    provide: AngularFireDatabase,
                    useValue: db
                }
            ],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
