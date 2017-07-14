import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByStatus'
})
export class OrderByStatusPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): Array<any> {
    if (!array || array === undefined || array.length === 0) return null;

    array.sort((a: any, b: any) => {
      if (a.status < b.status) {
        return -1;
      } else if (a.status > b.status) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
