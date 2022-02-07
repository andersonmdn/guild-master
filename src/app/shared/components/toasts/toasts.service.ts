import { Injectable } from '@angular/core';
import { Toast } from './toast/toast';

@Injectable()
export class ToastsService {
  private _toasts: Array<Toast> = [];

  constructor() {}

  public get toasts() {
    return this._toasts.filter((toast) => toast.isShow);
  }

  public set toasts(toasts: Array<Toast>) {
    this._toasts = toasts;
  }

  public newToast(
    title: 'Atenção' | 'Sucesso' | 'Erro' | 'Info',
    messagem: string
  ): void {
    this._toasts.push({
      title: title,
      messagem: messagem,
      date: new Date(),
      isShow: true,
    });
  }
}
