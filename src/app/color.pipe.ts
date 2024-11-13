import { Pipe, PipeTransform } from '@angular/core';
import {Cricket} from "./Shared/Models/Cricket";

@Pipe({
  name: 'color',
  standalone: true
})
export class ColorPipe implements PipeTransform {

  transform(jerseyNumber: number): string {
    if (jerseyNumber >= 10 && jerseyNumber <= 30) {
      return 'red';
    } else if (jerseyNumber >= 31 && jerseyNumber <= 40) {
      return 'blue';
    } else if (jerseyNumber > 40) {
      return 'green';
    } else {
      return 'black'; // Default color if jersey number doesn't match any range
    }
  }
}
