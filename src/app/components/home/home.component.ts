import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/Technology';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HandsetData } from 'src/app/models/HandsetData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  handsetData: HandsetData = HandsetData.getInstance()
  
  constructor() { 

  }

  ngOnInit(): void {
  }

}
