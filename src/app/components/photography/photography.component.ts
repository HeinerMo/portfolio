import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';
import { Photograph } from 'src/app/models/Photograph';
import { PhotographService } from 'src/services/PhotographService';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  photographs: Photograph[] = []
  handsetData: HandsetData = HandsetData.getInstance()

  constructor(private photographService: PhotographService) {
    this.loadPhotos();
  }

  ngOnInit(): void {

  }

  loadPhotos(): void {

    this.photographService.getPhotos().subscribe(
      (photographs: Photograph[]) => {
        photographs.forEach(photo => {
          this.photographs.push(photo);
        })
      },
      (error : HttpErrorResponse ) => {
        console.error('Failed to load photos.', error);
      }
    )
  }
}
