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
  selector: 'app-mobiledashboard',
  templateUrl: './mobiledashboard.component.html',
  styleUrls: ['./mobiledashboard.component.scss']
})

export class MobiledashboardComponent implements OnInit {
  listOfSigns: Array<Sign> = [];
  searchAddresses: Array<Sign> = [];
  address: Object;
  formattedAddress: string;

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.db.list('/signs').valueChanges().subscribe(sign => {
      sign.forEach(s => {
        Object.keys(s).map(key => s[key]).map(si => {
          this.listOfSigns.push(si);
        })
      });
    });
  }

  getAddress(place: object) {
    this.address = place['formatted_address'];
    this.formattedAddress = place['formatted_address'];
    this.getSearchedAddress(place);
  }

  getSearchedAddress(searchedAddress: object) {
    this.searchAddresses = this.listOfSigns.filter(
        search => search.destination.name.includes(searchedAddress.toString()) ?
            search.destination.name.includes(searchedAddress.toString()) :
            search.from.name.includes(searchedAddress.toString()));
  }

}

