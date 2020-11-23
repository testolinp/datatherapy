import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashTitle'
})
export class DashTitlePipe implements PipeTransform {

  transform(name: any): any {
    let name_url = name.toLowerCase().replace(/ /g, "-");
    return name_url;
  }

}
