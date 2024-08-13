import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photograph } from 'src/app/models/Photograph';
import { SiteConfig } from './SiteConfig';

@Injectable({
  providedIn: 'root'
})
export class PhotographService {
  constructor(private http: HttpClient, private config: SiteConfig) { }

  getPhotos(): Observable<Photograph[]> {
    if (this.config.getLanguage() == "es") {
      return this.http.get<Photograph[]>('./assets/data/Photography-ES.json');
    } else {
      return this.http.get<Photograph[]>('./assets/data/Photography-EN.json');
    }
  }
}