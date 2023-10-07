import { Pipe, PipeTransform } from '@angular/core';
import {IInterval} from '../model/interval.model';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  private transformDate(date: Date) {
    return date.toLocaleDateString('cs-Cz', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  transform(value: Date | IInterval<Date>): string {
    if (value instanceof Date) {
      return this.transformDate(value);
    }
    if ('to' in value) {
      return `${this.transformDate(value.from)} - ${this.transformDate(value.to as Date)}`;
    }
    return `Od ${this.transformDate(value.from)}`;
  }

}
