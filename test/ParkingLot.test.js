const ParkingLot = require('../src/ParkingLot');
const Car = require('../src/Car');

describe('ParkingLot Class', () => {
    let parkingLot;

    beforeEach(() => {
        parkingLot = new ParkingLot(3); // Create a parking lot with 3 slots for each test
    });

    it('should create a parking lot with specified size and initialize slots', () => {
        expect(parkingLot.size).toBe(3);
        expect(parkingLot.slots.length).toBe(3);
        expect(parkingLot.slots[0].slotNumber).toBe(1);
        expect(parkingLot.slots[1].slotNumber).toBe(2);
        expect(parkingLot.slots[2].slotNumber).toBe(3);
    });

    it('should find nearest available slot', () => {
        const car1 = new Car('KA-01-HH-1234', 'White');
        const car2 = new Car('KA-01-HH-9999', 'Black');
        parkingLot.parkCar(car1);
        parkingLot.parkCar(car2);

        const nearestSlot = parkingLot.findNearestAvailableSlot();
        expect(nearestSlot.slotNumber).toBe(3); // Slot 3 should be available
    });

    it('should park a car and return allocated slot number', () => {
        const car = new Car('KA-01-HH-1234', 'White');
        const slotNumber = parkingLot.parkCar(car);
        expect(slotNumber).toBe(1); // Slot 1 should be allocated
    });

    it('should free a slot when the car leaves', () => {
        const car = new Car('KA-01-HH-1234', 'White');
        parkingLot.parkCar(car);
        const success = parkingLot.leaveSlot(1);
        expect(success).toBe(true); // Slot 1 should be freed successfully
    });

    it('should get the current status of the parking lot', () => {
        const car1 = new Car('KA-01-HH-1234', 'White');
        const car2 = new Car('KA-01-HH-9999', 'Black');
        parkingLot.parkCar(car1);
        parkingLot.parkCar(car2);

        const status = parkingLot.getStatus();
        expect(status.length).toBe(2);
        expect(status[0].slotNumber).toBe(1);
        expect(status[0].registrationNumber).toBe('KA-01-HH-1234');
        expect(status[0].color).toBe('White');
        expect(status[1].slotNumber).toBe(2);
        expect(status[1].registrationNumber).toBe('KA-01-HH-9999');
        expect(status[1].color).toBe('Black');
    });

    // Add more tests for other methods like finding registration numbers by color, slot numbers by color, etc.
});
