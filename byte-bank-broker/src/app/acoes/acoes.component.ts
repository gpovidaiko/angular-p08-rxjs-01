import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AcoesService } from './acoes.service';
import { Acoes } from './modelo/acoes.model';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();

  acoes$: Observable<Acoes> = this.acoesService.getAcoes();

  constructor(private acoesService: AcoesService) {}

}
