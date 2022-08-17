const car = require('./car')

test('у машины должно быть 4 колеса', () => {
    expect(car.wheel).toBe(4)
   if (car.wheel === 4){
    console.log ('green')
   } else{ console.log('red')}
});