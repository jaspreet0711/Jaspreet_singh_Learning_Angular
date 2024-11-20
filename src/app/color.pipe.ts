import { Pipe, PipeTransform } from '@angular/core';
import {Cricket} from "./Shared/Models/Cricket";

@Pipe({
  name: 'color',
  standalone: true
})
export class ColorPipe implements PipeTransform {

  transform(num: Cricket): string {
    if (num.jerseyNumber >= 10 && num.jerseyNumber <= 30) {
      return `${num.jerseyNumber, 'red'}`;
    } else if (num.jerseyNumber >= 31 && num.jerseyNumber <= 40) {
      return `${num.jerseyNumber, 'blue'}`;
    } else if (num.jerseyNumber > 40) {
      return `${num.jerseyNumber, 'green'}`;
    } else {
      return `${num.jerseyNumber, 'black'}`; // Default color if jersey number doesn't match any range
    }
  }
}
