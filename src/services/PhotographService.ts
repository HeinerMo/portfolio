import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photograph } from 'src/app/models/Photograph';

@Injectable({
  providedIn: 'root'
})
export class PhotographService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photograph[]> {
    return this.http.get<Photograph[]>('./assets/data/Photography.json');
  }
}