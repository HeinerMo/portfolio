import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
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
export class PhotographyComponent {

  photographs: Photograph[] = []
  handsetData: HandsetData = HandsetData.getInstance()
  selectedPhoto: any = null;
  dialogRef : any;

  constructor(private photographService: PhotographService, private dialog: MatDialog) {
    this.loadPhotos();
  }

  openModal(photo: Photograph): void {
    this.dialogRef = this.dialog.open(ImageModalComponent, {
      data: photo
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
