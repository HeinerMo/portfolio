import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';
import { PageDataService } from 'src/services/PageDataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  handsetData: HandsetData = HandsetData.getInstance()
  intro? : string;
  title? : string;
  
  constructor(private pageDataService : PageDataService) {

  }

  ngOnInit(): void {
    this.pageDataService.getValue('HomeIntroduction').subscribe(value => {
      this.intro = value;
    })

    this.pageDataService.getValue('HomeTitle').subscribe(value => {
      this.title = value;
    })
  }

}
