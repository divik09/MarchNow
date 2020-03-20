import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service/service-locator.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.ROLE,locator,route)
   }
   edit(id) {
    let page = "role/" + id;
      
    this.locator.forward(page);
  }
 /*  ngOnInit() {
  } */

}
