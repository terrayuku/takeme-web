import {Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input, NgZone} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AngularFireDatabase} from "angularfire2/database";
import PlaceResult = google.maps.places.PlaceResult;
// import { google } from '@google/maps';
declare const google: any;

class Sign {
    from: PlaceResult;
    destination: PlaceResult;
    downloadUrl: String;
}

@Component({
    selector: 'SearchAddress',
    templateUrl:'./searchaddress.component.html',
    styleUrls: ['./searchaddress.component.scss']
})

export class SearchaddressComponent implements OnInit {
    @Input() adressType: string;
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    @ViewChild('from', {static: false}) from: any;
    @ViewChild('destination', {static: false}) destination: any;

    autocompleteFrom: string;
    autocompleteDestination: string;
    private currentLocation: String;
    private destinationLocation: String;
    findSign: FormGroup;
    signs: Sign;

    private message: string;

    constructor( private db: AngularFireDatabase, private router: Router, private fb: FormBuilder, public zone: NgZone ) {
    }

    ngOnInit() {
        this.findSign = this.fb.group({
            from: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            to: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
        })
    }

    ngAfterViewInit() {
        this.getFromPlaceAutocomplete();
        this.getDestinationPlaceAutocomplete();
    }

    private getFromPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.from.nativeElement,
            {
                componentRestrictions: {country: 'ZA'},
                types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
            });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace().name;
            this.currentLocation = place;
            this.invokeEvent(place);
        });
    }

    private getDestinationPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.destination.nativeElement,
            {
                componentRestrictions: {country: 'ZA'},
                types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
            });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace().name;
            this.destinationLocation = place;
            this.invokeEvent(place);
        });
    }

    invokeEvent(place: Object) {
        this.setAddress.emit(place);
    }

    onSubmit() {
        this.db.list('/signs/' + this.destinationLocation.toUpperCase()).valueChanges()
            .forEach(sign => {
                console.log(sign);
                if (sign.length > 0) {
                    sign.forEach(s => {
                        this.signs = s as Sign;
                        console.log("Sign", this.signs);
                        // make sure the current location of the user is the same as the one corresponding to the
                        // download image url
                        if (this.signs.from.name === this.currentLocation) {
                            console.log(this.signs.destination, this.signs.from, this.signs.downloadUrl);
                            if (this.signs.downloadUrl !== undefined) {
                                this.router.navigateByUrl('display/sign', {
                                    queryParams: {
                                        from: JSON.stringify(this.signs.from.name),
                                        destination: JSON.stringify(this.signs.destination.name),
                                        downloadUrl: JSON.stringify(this.signs.downloadUrl)
                                    }
                                });
                            } else {
                                this.message = "Thank you for using Take Me, the sign you are looking for does not have the picture that shows the sign";
                            }
                        } else { // when there's no current location but we have the destination
                            this.message = "Thank you for using Take Me, currently we do not have the directions sign for "
                                + this.currentLocation + " to " + this.destination;
                        }
                    });
                } else {
                    // use  cloud messaging to lead the user to the mobile app and ask them to upload the sign for a reward
                    this.message = "Thank you for using Take Me, unfortunately we could not find the sign that you are looking for";
                }

            });
    }
}
