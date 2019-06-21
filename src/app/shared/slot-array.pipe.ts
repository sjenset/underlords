import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'slotArray' })

export class SlotArrayPipe implements PipeTransform {
  transform(value: number): number[] {
    const res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}
