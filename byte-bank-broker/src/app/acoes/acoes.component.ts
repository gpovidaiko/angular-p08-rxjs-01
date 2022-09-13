import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { AcoesService } from './acoes.service';
import { Acoes } from './modelo/acoes.model';

const TEMPO_ESPERA_BUSCA = 300;
@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();

  acoesInitial$: Observable<Acoes> = this.acoesService.getAcoes();
  acoesSearch$: Observable<Acoes> = this.acoesInput.valueChanges.pipe(
    debounceTime(TEMPO_ESPERA_BUSCA),
    filter((valor: string) => valor.length >= 3 || !valor.length),
    distinctUntilChanged(),
    switchMap((valor: string) => this.acoesService.getAcoes(valor))
  );
  acoes$: Observable<Acoes> = merge(
    this.acoesInitial$,
    this.acoesSearch$
  );

  constructor(private acoesService: AcoesService) {}

}
