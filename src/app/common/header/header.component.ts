import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isLoggedIn=true;

  loginButtonCSS = 'indicator indicator--trigger--click';
  // loginButtonCSS1 = 'indicator indicator--trigger--click indicator--open';
  ngOnInit(): void {
    
  }

}
