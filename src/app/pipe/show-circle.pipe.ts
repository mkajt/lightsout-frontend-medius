import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showCircle'
})
export class ShowCirclePipe implements PipeTransform {

  transform(value: any): string {
    return value === 1 ? 'visible' : 'hidden';
  }

}
