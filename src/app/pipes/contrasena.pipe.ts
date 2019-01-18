import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, ocultar?: boolean): string {
    if (ocultar == null || ocultar) {
      let retornar = '';
      for (let caracterNum = 0; caracterNum < value.length; caracterNum++) {
          retornar += '*';
      }
      return retornar;
    }
    return value;

  }

}
