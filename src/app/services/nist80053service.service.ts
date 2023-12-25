import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Nist80053serviceService {
  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { 
  }

  postToApi(data: any): Observable<any> {
    const endpoint = '/sp800-53-rev4/sp800_53_rev4';
    return this.http.post<any>(`${this.apiUrl}${endpoint}`, data);
  }
}