import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'remarkspipe'
})
export class RemarkspipePipe implements PipeTransform {

  transform(value: string, togglePipe:boolean,names:any[] ,name:any): any {
        
        if(value.length > 20 && !names.includes(value)){
              return value.substring(0, 20)+'...' ;
        }
      else if(names.includes(value)) {
              return value;
      }
      else {
        return value.substring(0, 20)+'...' ;
      }
      
     

 }
 

}
