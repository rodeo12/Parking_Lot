const Car = require('../src/Car');

describe('Car Class', () => {
    it('should create a car object with registration number and color', () => {
        const car = new Car('KA-01-HH-1234', 'White');
        expect(car.registrationNumber).toBe('KA-01-HH-1234');
        expect(car.color).toBe('White');
    });
});
