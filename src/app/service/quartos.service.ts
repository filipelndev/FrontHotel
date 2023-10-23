import { Injectable } from '@angular/core';
import { Quarto } from '../Models/Quarto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuartosService {
  private apiUrl = 'http://localhost:8080/api/quartos'; // URL completa da sua API

  constructor(private http: HttpClient) {}

  obterQuartos(): Observable<Quarto[]> {
    return this.http.get<Quarto[]>(this.apiUrl);
  }
}
