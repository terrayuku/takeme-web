import {Component, OnInit} from '@angular/core';
import PlaceResult = google.maps.places.PlaceResult;
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/internal/operators";

class Sign {
    from: PlaceResult;
    destination: PlaceResult;
    downloadUrl: String;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    listOfSigns: Array<Sign> = [];

    constructor(private db: AngularFireDatabase) {
        this.db.list('/signs').valueChanges().subscribe(sign => {
            sign.forEach(s => {
                Object.keys(s).map(key => s[key]).map(si => {
                    this.listOfSigns.push(si);
                })
            });
        });
    }

    ngOnInit() {
    }

}
