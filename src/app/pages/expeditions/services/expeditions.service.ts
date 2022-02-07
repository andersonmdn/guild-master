import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay } from 'rxjs/operators';

import { Expedition } from './../models/expedition';

@Injectable({
  providedIn: 'root',
})
export class ExpeditionsService {
  private readonly API = '/assets/expediions.json';

  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Expedition[]>(this.API).pipe(
      first(),
      //delay(5000),
      tap((expeditions) => console.log(expeditions))
    );
  }
}
