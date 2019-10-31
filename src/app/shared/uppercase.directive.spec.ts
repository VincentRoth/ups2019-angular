import { UppercaseDirective } from './uppercase.directive';
import { ElementRef } from '@angular/core';

describe('UppercaseDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = {
      nativeElement: {
        style: {}
      }
    };
    const directive = new UppercaseDirective(el);
    expect(directive).toBeTruthy();
  });
});
