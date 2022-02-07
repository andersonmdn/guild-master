import { ToastsService } from './../../shared/components/toasts/toasts.service';
import { ExpeditionsService } from './services/expeditions.service';
import { Component, OnInit } from '@angular/core';

import { Expedition } from './models/expedition';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-expeditions',
  templateUrl: './expeditions.component.html',
  styleUrls: ['./expeditions.component.less'],
})
export class ExpeditionsComponent implements OnInit {
  public expeditions$: Observable<Expedition[]>;

  constructor(
    private expeditionsService: ExpeditionsService,
    private toastsService: ToastsService
  ) {
    console.log('Constructor');
    this.expeditions$ = this.expeditionsService.listAll().pipe(
      catchError((error) => {
        console.log(error);

        toastsService.newToast('Erro', 'Erro ao carregar expedições!');

        return of([]);
      })
    );
  }

  ngOnInit(): void {}
}
