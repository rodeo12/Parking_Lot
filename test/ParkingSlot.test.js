const ParkingSlot = require('../src/ParkingSlot');
const Car = require('../src/Car');

describe('ParkingSlot Class', () => {
    it('should create a parking slot object with slot number and initial status', () => {
        const slot = new ParkingSlot(1);
        expect(slot.slotNumber).toBe(1);
        expect(slot.isOccupied).toBe(false);
        expect(slot.car).toBe(null);
    });

    it('should park a car in the slot', () => {
        const slot = new ParkingSlot(1);
        const car = new Car('KA-01-HH-1234', 'White');
        slot.parkCar(car);
        expect(slot.isOccupied).toBe(true);
        expect(slot.car).toBe(car);
    });

    it('should free the slot when the car leaves', () => {
        const slot = new ParkingSlot(1);
        const car = new Car('KA-01-HH-1234', 'White');
        slot.parkCar(car);
        slot.leaveCar();
        expect(slot.isOccupied).toBe(false);
        expect(slot.car).toBe(null);
    });
});
