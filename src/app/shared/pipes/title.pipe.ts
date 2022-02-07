import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Atenção':
        return 'bi-exclamation-triangle-fill';
      case 'Sucesso':
        return 'bi-check-square-fill';
      case 'Erro':
        return 'bi-bug-fill';
    }

    return 'bi-info-circle-fill';
  }
}
