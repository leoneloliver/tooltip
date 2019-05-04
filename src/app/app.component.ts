import { Component, OnInit } from '@angular/core';

declare var myAct: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tooltip-APP';

  ngOnInit() {
    
	  myAct();

  }
}

