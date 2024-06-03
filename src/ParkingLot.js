const ParkingSlot = require('./ParkingSlot');

class ParkingLot {
    constructor(size) {
        this.size = size;
        this.slots = [];
        for (let i = 1; i <= size; i++) {
            this.slots.push(new ParkingSlot(i));
        }
    }

    findNearestAvailableSlot() {
        for (let slot of this.slots) {
            if (!slot.isOccupied) {
                return slot;
            }
        }
        return null;
    }

    parkCar(car) {
        const slot = this.findNearestAvailableSlot();
        if (slot) {
            slot.parkCar(car);
            return slot.slotNumber;
        } else {
            return null;
        }
    }

    leaveSlot(slotNumber) {
        const slot = this.slots[slotNumber - 1];
        if (slot && slot.isOccupied) {
            slot.leaveCar();
            return true;
        }
        return false;
    }

    getStatus() {
        return this.slots.filter(slot => slot.isOccupied).map(slot => ({
            slotNumber: slot.slotNumber,
            registrationNumber: slot.car.registrationNumber,
            color: slot.car.color
        }));
    }

    findRegistrationNumbersByColor(color) {
        return this.slots
            .filter(slot => slot.isOccupied && slot.car.color === color)
            .map(slot => slot.car.registrationNumber);
    }

    findSlotNumbersByColor(color) {
        return this.slots
            .filter(slot => slot.isOccupied && slot.car.color === color)
            .map(slot => slot.slotNumber);
    }

    findSlotNumberByRegistrationNumber(registrationNumber) {
        const slot = this.slots.find(slot => slot.isOccupied && slot.car.registrationNumber === registrationNumber);
        return slot ? slot.slotNumber : null;
    }
}

module.exports = ParkingLot;
