import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HandsetData } from 'src/app/models/HandsetData';
import { Photograph } from 'src/app/models/Photograph';
import { PhotographService } from 'src/services/PhotographService';
import { ImageModalComponent } from '../../reusable/image-modal/image-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  photographs: Photograph[] = []
  handsetData: HandsetData = HandsetData.getInstance()
  selectedPhoto: any = null;

  constructor(private photographService: PhotographService, private dialog: MatDialog) {
    this.loadPhotos();
  }

  ngOnInit(): void {
  }

  openModal(photo: Photograph): void {
    console.log('Opening modal with photo:', photo);
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: photo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal closed with result:', result);
    });
  }


  loadPhotos(): void {

    this.photographService.getPhotos().subscribe(
      (photographs: Photograph[]) => {
        photographs.forEach(photo => {
          this.photographs.push(photo);
        })
      },
      (error: HttpErrorResponse) => {
        console.error('Failed to load photos.', error);
      }
    )
  }
}
