import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribuyente } from '../models/contribuyente';

@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {
url = 'http://localhost:4000/api/contribuyentes/';

  constructor(private http: HttpClient) { }

  getContrib(): Observable<any> {
    return this.http.get(this.url);
  }

  delContrib(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveContrib(contribuyente: Contribuyente): Observable<any> {
    return this.http.post(this.url, contribuyente);
  }

  getContribOne(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editContrib(id: string, contribuyente: Contribuyente): Observable<any> {
    return this.http.put(this.url + id, contribuyente);
  }
}
