import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service/service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent extends BaseListCtl{

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
          super(locator.endpoints.COLLEGE,locator,route)

   }
   edit(id) {
    let page = "college/" + id;
      
    this.locator.forward(page);
  }

 /*  ngOnInit() {
  }
 */
}
