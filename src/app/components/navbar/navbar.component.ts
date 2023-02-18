import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HandsetData } from 'src/app/models/HandsetData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  handsetData: HandsetData = HandsetData.getInstance()

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      this.handsetData.setHandset(false)
      if (result.matches) {
        this.handsetData.setHandset(true)
      }
    })
  }

}
