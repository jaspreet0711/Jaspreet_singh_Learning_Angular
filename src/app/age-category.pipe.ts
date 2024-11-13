import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCategory',
  standalone: true
})
export class AgeCategoryPipe implements PipeTransform {

  transform(age: number): string {
    if (age < 30){
      return 'Young';
    } else if (age < 40){
      return 'Mid-career';
    } else if (age < 45) {
      return 'Professional';
    }else {
      return 'Experienced'
    }
  }

}
