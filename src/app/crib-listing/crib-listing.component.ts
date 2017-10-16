import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CripService } from 'E:/project_ws/angualar2_trng_ws/real-state-app/src/app/crip-service.service';
@Component({
    selector: 'app-crib-listing',
    templateUrl: './crib.component.html',
    styleUrls: ['./crib.component.css']
})
export class CribListingComponent implements OnInit {

    data: Array<any>;
   error: string;

    constructor(private http: Http,
      private cripService: CripService
    ) { }

    ngOnInit() {
        this.http.get('assets/houses.json')
        .map(res => res.json())
        .subscribe(
           data => this.data = data,
           error => this.error = error.statusText
        );
        this.cripService.newCribSubject.subscribe(
            data => this.data = [data, ...this.data]
        );
     }
}

