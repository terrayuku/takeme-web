import {Component, EventEmitter, Input, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireDatabase} from "angularfire2/database";
import {Router} from "@angular/router";
declare const google: any;

@Component({
    selector: 'Search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Input() adressType: string;
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    @ViewChild('search', {static: false}) search: any;

    searchedAddress: string;
    private searchedRoute: String;
    searchSign: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.searchSign = this.fb.group({
            search: ['', [Validators.minLength(3), Validators.maxLength(50)]],
        });
        this.getCurrentLocation()
    }
    ngAfterViewInit() {
        this.getSearchedPlaceAutocomplete();
    }

    getCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    private getSearchedPlaceAutocomplete() {

        const autocomplete = new google.maps.places.Autocomplete(this.search.nativeElement,
            {
                componentRestrictions: {country: 'ZA'},
                types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
            });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace().name;
            this.searchedRoute = place;
            this.invokeEvent(place);
        });
    }

    invokeEvent(place: Object) {
        this.setAddress.emit(place);
    }

    address(place: Object) {
        this.setAddress.emit(place);
    }



}
