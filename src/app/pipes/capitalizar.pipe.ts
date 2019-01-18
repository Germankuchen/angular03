import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizarPipe implements PipeTransform {
    transform(value: string, todes: boolean = true): string {
        const MINUSCULA: string = value.toLowerCase();
        const arreglo: string[] = MINUSCULA.split(' ');
        if (todes) {
            for (let i = 0; i < arreglo.length; i++) {
                arreglo[i] = arreglo[i].substr(0, 1).toUpperCase() + arreglo[i].substr(1);
            }
        } else {
            arreglo[0] = arreglo[0].substr(0, 1).toUpperCase() + arreglo[0].substr(1);
        }
        return arreglo.join(' ');
    }
}
