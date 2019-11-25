import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'remarkspipe'
})
export class RemarkspipePipe implements PipeTransform {

  transform(value: string, togglePipe:boolean, name: string, names:any[]): any {
    
    if(value.length > 20  && togglePipe ){
      return value.substring(0, 20) + '...';
  // }
    }
  else{
    return value;
  }
  // if(value.length > 20 && togglePipe  ){
  //   // if(name==value){
  //   //   return value;
  //   // }
  //   return value.substring(0, 20) + '...';
  // }
  // else if(name ===value) {
  //   return value;

  // }


 }
 

}
