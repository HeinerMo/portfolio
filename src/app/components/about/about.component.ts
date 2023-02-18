import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  handsetData: HandsetData = HandsetData.getInstance()

  constructor() { }

  ngOnInit(): void {
  }

}
