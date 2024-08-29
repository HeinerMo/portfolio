import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';
import { PageDataService } from 'src/services/PageDataService';
import { SiteConfig } from 'src/services/SiteConfig';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
  handsetData: HandsetData = HandsetData.getInstance()
  title? : string
  intro? : string

  constructor(private pageDataService: PageDataService, public siteConfig: SiteConfig) {
  }

  ngOnInit(): void {
    this.pageDataService.getValue("ArticlesIntro").subscribe(value => {
      this.intro = value; 
    })

    this.pageDataService.getValue("ArticlesTitle").subscribe(value => {
      this.title = value;
    })
  }


}
