import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Acao, Acoes, AcoesApi } from './modelo/acoes.model';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  private readonly baseApi = `http://localhost:3000`;
  private readonly endpoint = `${this.baseApi}/acoes`;

  constructor(private httpCliente: HttpClient) { }

  getAcoes(): Observable<Acoes> {
    return this.httpCliente.get<AcoesApi>(this.endpoint).pipe(
      pluck('payload'), // map((acoes: AcoesApi) => acoes.payload),
      map((acoes: Acoes) => acoes.sort(this.ordenaPorCodigo))
    );
  }

  ordenaPorCodigo(acaoA: Acao, acaoB: Acao): number {
    if (acaoA.codigo > acaoB.codigo) {
      return 1;
    }
    if (acaoA.codigo < acaoB.codigo) {
      return -1;
    }
    return 0;
  }
}
