import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = 'http://localhost:8080/oportunidades'

  listar() {
    return this.httpClient.get(this.apiUrl)
  }

  constructor(private httpClient: HttpClient) { }
}
