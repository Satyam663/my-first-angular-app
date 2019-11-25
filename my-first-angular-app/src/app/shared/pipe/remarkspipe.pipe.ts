import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'remarkspipe'
})
export class RemarkspipePipe implements PipeTransform {

  transform(value: string, toggle:boolean,remarks:any[] ): any {
        
        if(value.length > 20 && toggle){
              return value.substring(0, 20)+'...' ;
        }
      // else if(remarks.includes(value)) {
      //         return value;
      // }
      else {
              return value
      }
      
     

 }
 

}
