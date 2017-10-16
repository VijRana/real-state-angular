import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CripService  } from 'E:/project_ws/angualar2_trng_ws/real-state-app/src/app/crip-service.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;
  propertyTypes: Array<string>= ['House', 'Condo', 'Duplex'];
  constructor(public cribService: CripService) { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
     this.cribService.addCrib(data);
     this.newCribForm.reset();
  }

}
