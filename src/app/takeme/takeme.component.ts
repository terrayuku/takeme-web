import {Component, OnInit} from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

class Sign {
    from: String;
    destination: String;
    downloadUrl: String;
}

@Component({
    selector: 'app-takeme',
    templateUrl: './takeme.component.html',
    styleUrls: ['./takeme.component.scss']
})
export class TakemeComponent implements OnInit {
    private currentLocation: String;
    private destination: String;
    private signs: Sign;
    private message: string;
    findSign: FormGroup;

    constructor(private db: AngularFireDatabase, private router: Router, private fb: FormBuilder ) {
    }

    ngOnInit() {
        this.findSign = this.fb.group({
            from: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            to: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
        })
    }

    onSubmit(from: String, to: String) {
        this.currentLocation = from;
        this.destination = to;
        this.db.list('/signs/' + this.destination).valueChanges()
            .forEach(sign => {
                if (sign.length > 0) {
                    sign.forEach(s => {
                        this.signs = s as Sign;
                        // make sure the current location of the user is the same as the one corresponding to the
                        // download image url
                        if (this.signs.from === this.currentLocation) {
                            console.log(this.signs.destination, this.signs.from, this.signs.downloadUrl);
                            if (this.signs.downloadUrl !== undefined) {
                                this.router.navigateByUrl('display/sign', {
                                    queryParams: {
                                        from: JSON.stringify(this.signs.from),
                                        destination: JSON.stringify(this.signs.destination),
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
