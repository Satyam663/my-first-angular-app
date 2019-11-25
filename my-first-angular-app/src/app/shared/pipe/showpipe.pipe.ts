import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpipe'
})
export class ShowpipePipe implements PipeTransform {

  transform(value: any, togglePipe: boolean): any {
    if(value.length > 20 && togglePipe){
      return value.substring(0,20) + '....';
    }else
    return value
   
  }

}
