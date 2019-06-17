import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kebab' })

export class KebabPipe implements PipeTransform {
    transform(input: string): string {
        return input.split(' ').join('-').replace('\'', '').toLowerCase();
      }
}
