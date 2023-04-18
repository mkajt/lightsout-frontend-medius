import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorArray'
})
export class ColorArrayPipe implements PipeTransform {

  transform(value: any): string {
    return value === 1 ? 'gold' : '#363636';
  }

}
