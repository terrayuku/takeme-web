import {Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-takeme',
    templateUrl: './takeme.component.html',
    styleUrls: ['./takeme.component.scss']
})
export class TakemeComponent implements OnInit {
    address: Object;

    formattedAddress: string;

    constructor() {
    }

    ngOnInit() {
    }
    getAddress(place: object) {
        console.log(place);
        this.address = place['formatted_address'];
        this.formattedAddress = place['formatted_address'];
    }
}
