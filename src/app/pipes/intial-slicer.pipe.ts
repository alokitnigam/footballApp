import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intialSlicer'
})
export class IntialSlicerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.substring(0,1)
  }

}
