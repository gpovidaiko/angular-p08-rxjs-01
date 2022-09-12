import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcoesApi } from './modelo/acoes.model';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  private readonly baseApi = `http://localhost:3000`;
  private readonly endpoint = `${this.baseApi}/acoes`;

  constructor(private httpCliente: HttpClient) { }

  getAcoes(): Observable<AcoesApi> {
    return this.httpCliente.get<AcoesApi>(this.endpoint)
  }
}
