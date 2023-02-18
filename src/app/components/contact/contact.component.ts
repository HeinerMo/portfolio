import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  handsetData: HandsetData = HandsetData.getInstance()

  constructor() { }

  ngOnInit(): void {
  }

}
