import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonServiceService {
  constructor(private http: HttpClient) {}

  getAnalytics(formData: any): Observable {
    this.http.request( '', 'POST', formData);
  }


}
