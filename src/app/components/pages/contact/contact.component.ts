import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';
import { PageDataService } from 'src/services/PageDataService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  handsetData: HandsetData = HandsetData.getInstance()
  title?: string

  constructor(private pageDataService: PageDataService) {}

  ngOnInit(): void {
    this.pageDataService.getValue("ContactTitle").subscribe(value => {
      this.title = value 
    })
  }

}
