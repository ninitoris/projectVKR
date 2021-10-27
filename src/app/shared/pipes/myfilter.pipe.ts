import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(eskdclass: any[], searchCat: string): any {
    let filterCat = searchCat;
    let filteredValues: never[] = [];
/*
    if((filterCat != "" || filterCat != null)) {
      return filteredValues ? eskdclass.filter(eskdclass => (eskdclass.num).toLowerCase().indexOf(filterCat.toLowerCase()) !== -1) : eskdclass;
    };
    */
    if((filterCat != "" || filterCat != null)) {
      return filteredValues ? eskdclass.filter(eskdclass => String(eskdclass.num).indexOf(filterCat) !== -1) : eskdclass;
    };
  }

}