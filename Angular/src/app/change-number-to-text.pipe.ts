import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeNumberToText'
})
export class ChangeNumberToTextPipe implements PipeTransform {

  transform(value: any) {
    switch (value) {
      case 1:
        return `So 1`
      case 2:
        return `So 2`
      default:
        return `Khong biet la gi`
    }
  }


}
