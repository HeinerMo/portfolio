import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HandsetData } from 'src/app/models/HandsetData';
import { SiteConfig } from 'src/services/SiteConfig';
import { PageDataService } from 'src/services/PageDataService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  handsetData: HandsetData = HandsetData.getInstance()

  collapsed: boolean = true;

  homeNavTitle? : string;
  projectsNavTitle? : string; 
  photographyNavTitle? : string;
  contactNavTitle? : string;
  aboutNavTitle? : string;

  currentLanguage? : string;

  constructor(private breakpointObserver: BreakpointObserver, private config : SiteConfig, private pageDataService : PageDataService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Web).subscribe((result: any) => {
      this.handsetData.setHandset(false)
      if (!result.matches) {
        this.handsetData.setHandset(true)
      }
      this.currentLanguage = (this.config.getLanguage() == "en") ? "Español" : "English";
    })

    this.pageDataService.getValue('HomeNav').subscribe(value => {
      this.homeNavTitle = value;
    })

    this.pageDataService.getValue('SoftwareProjectsNav').subscribe(value => {
      this.projectsNavTitle = value;
    })

    this.pageDataService.getValue('PhotographyNav').subscribe(value => {
      this.photographyNavTitle = value;
    })

    this.pageDataService.getValue('AboutNav').subscribe(value => {
      this.aboutNavTitle = value;
    })
  }

  public toggle() {
    this.collapsed = !this.collapsed;
  }

  public changeLanguage() {
    this.config.toggleLanguage();

    this.currentLanguage = (this.config.getLanguage() == "en") ? "Español" : "English";

    window.location.reload();
  }

}
