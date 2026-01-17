import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // pipe ın kullandığı değeri manipüle/transform etmemizi sağlayan fonsiyondur.
  transform(value: string, a : number, b: number): string { // value: string custom pipe ım kesinlikle string olarak çalışacak demek

    return value.slice(a,b);
    
  }
}
