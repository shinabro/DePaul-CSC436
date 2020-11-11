import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should track calls but NOT call through', () => {
    spyOn(service, 'add');
    let result = service.add(1, 1);
    expect(service.add).toHaveBeenCalled();
    expect(service.add).toHaveBeenCalledTimes(1);
    expect(service.add).toHaveBeenCalledWith(1, 1);
  })

  it('add test', () => {
    let result = service.add(1, 1);
    expect(2).toEqual(result);
  })

  it('example of stub, should return value with 42', () => {
    spyOn(service, 'add').and.returnValue(42);
    let result = service.add(1, 1);
    expect(42).toEqual(result);
  })

  it('should return values 1, 2, 3', () => {
    spyOn(service, 'add').and.returnValues(1, 2, 3);
    expect(service.add(1, 1)).toEqual(1);
    expect(service.add(1, 1)).toEqual(2);
    expect(service.add(1, 1)).toEqual(3);
  })
});


