import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseUrl = "https://www.cdm.depaul.edu/academics/pages/courseinfo.aspx?Subject=CSC&CatalogNbr=436"
  displayChild = false;
  runningOS = environment.runningOS;

  toggle() {
    console.log('toggled:' + this.runningOS);
    this.displayChild = !this.displayChild;
  }
}
