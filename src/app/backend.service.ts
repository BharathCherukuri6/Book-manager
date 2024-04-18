import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:8080/books'; // Replace with your backend API base URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }


  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  deleteBook(data: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`+data);

  }

  // Define more methods as needed...
}
