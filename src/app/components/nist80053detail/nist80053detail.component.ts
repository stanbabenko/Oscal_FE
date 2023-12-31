import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Nist80053serviceService } from '../../services/nist80053service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nist80053detail',
  standalone: true,
  imports: [],
  templateUrl: './nist80053detail.component.html',
  styleUrl: './nist80053detail.component.css'
})
export class Nist80053detailComponent {
  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) {}

  postToApi(data: any): Observable<any> {
    const endpoint = '/sp800-53-rev4/sp800_53_rev4';
    return this.http.post<any>(`${this.apiUrl}${endpoint}`, data);
  }

  onClickSubmit() {
    const postData = { /* your data for the POST request */ };
    console.log("POST data works! 5");
    //this.postToApi(postData);

    this.postToApi(postData).subscribe(
      response => {
        //Handle the API response here
        console.log('API Response:', response);
      },
      error => {
        // Handle errors here
        console.error('API Error:', error);
      }
    );
  }
}
