import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add(lhs: number, rhs: number): number {
    return lhs + rhs;
  }
}
