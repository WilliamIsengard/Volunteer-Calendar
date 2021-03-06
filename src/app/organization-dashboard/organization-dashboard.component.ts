import { JoinEventService } from './../join-event/join-event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'organization-dashboard',
  templateUrl: './organization-dashboard.component.html',
  styleUrls: ['./organization-dashboard.component.css']
})
export class OrganizationDashboardComponent implements OnInit {
  details: any[];
  filteredResults: any[];
  constructor(private service: JoinEventService) { }


  ngOnInit() {
    this.service.getDetails().subscribe(response => {
      this.details = response.filter(p => p.userId === 3);  //  instead of userId of 2, pass in dynamic variable which will be userId of logged in user.  
    });
  }

  updateFilter(id) {
    this.filteredResults = id ? this.details.filter(p => p.userId === id) : this.details;
  }


}
