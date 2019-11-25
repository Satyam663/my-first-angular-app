import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpipe'
})
export class ShowpipePipe implements PipeTransform {

  transform(value: any, togglePipe: boolean): any {
    console.log(value)
    if(togglePipe){
      value.forEach(element => {
        element.remark = element.remark.substring(0, 20)+ "..." ;
      });
     return value;
    }else{
      console.log(value)
     return value;
    }
   
  }

}
