import { Calculator } from '../calculator'

describe('calculator adder', () => {
  it('when input 2 & 5 should be equal 7', () => {
    const add = Calculator.add(2, 5);
    expect(add).toEqual(7);
  })  

  it('when input 1 & 4 & 6 should be equal 11', () => {
    const add = Calculator.add(1, 4, 6);
    expect(add).toEqual(11);
  })  

  it('when input 0.8 & 0.4 should be equal 1.2', () => {
    const add = Calculator.add(0.8, 0.4);
    expect(add).toEqual(1.2);
  })  

  it('when input includes NaN should be equal NaN', () => {
    const add = Calculator.add(0.8, 0.4, 2, NaN);
    expect(add).toEqual(NaN);
  })  
  
  it('when input 0.813 & 0.4567 & 0.1 & 0.2 should be equal 1.5697', () => {
    const add = Calculator.add(0.813, 0.4567, 0.1, 0.2);
    expect(add).toEqual(1.5697);
  })
})
