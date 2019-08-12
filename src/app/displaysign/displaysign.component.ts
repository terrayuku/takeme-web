import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-displaysign',
  templateUrl: './displaysign.component.html',
  styleUrls: ['./displaysign.component.scss']
})
export class DisplaysignComponent implements OnInit {
  from: string;
  destination: string;
  downloadUrl: string;
  constructor(private router: Router) {
      if(this.router.getCurrentNavigation().extras.queryParams !== undefined) {
          this.from = JSON.parse(this.router.getCurrentNavigation().extras.queryParams['from']);
          this.destination = JSON.parse(this.router.getCurrentNavigation().extras.queryParams['destination']);
          this.downloadUrl = JSON.parse(this.router.getCurrentNavigation().extras.queryParams['downloadUrl']);
      } else {
          this.router.navigateByUrl("/", { queryParams : { message: "Thank you for using Take Me, Unfortunately we experienced something on our side and we cant help you."}});
      }


  }

  ngOnInit() {
  }

    gotIt() {
      this.router.navigateByUrl("/");
    }

}
