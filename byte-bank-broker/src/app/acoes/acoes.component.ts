import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AcoesService } from './acoes.service';
import { Acoes } from './modelo/acoes.model';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();

  acoesInitial$: Observable<Acoes> = this.acoesService.getAcoes();
  acoesSearch$: Observable<Acoes> = this.acoesInput.valueChanges.pipe(
    switchMap((valor: string) => this.acoesService.getAcoes(valor))
  );
  acoes$: Observable<Acoes> = merge(
    this.acoesInitial$,
    this.acoesSearch$
  );

  constructor(private acoesService: AcoesService) {}

}
