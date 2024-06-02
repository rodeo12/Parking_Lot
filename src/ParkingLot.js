// src/ParkingLot.js

const Car = require('./Car');
const ParkingSlot = require('./ParkingSlot');

class ParkingLot {
  constructor(totalSlots) {
    this.totalSlots = totalSlots;
    this.slots = Array.from({ length: totalSlots }, (_, i) => new ParkingSlot(i + 1));
  }

  findNearestAvailableSlot() {
    return this.slots.find(slot => !slot.isOccupied);
  }

  parkCar(registrationNumber, color) {
    const car = new Car(registrationNumber, color);
    const slot = this.findNearestAvailableSlot();

    if (slot) {
      slot.park(car);
      return slot.slotNumber;
    } else {
      return null;
    }
  }

  leaveSlot(slotNumber) {
    const slot = this.slots[slotNumber - 1];
    if (slot.isOccupied) {
      slot.leave();
      return true;
    } else {
      return false;
    }
  }

  findRegistrationNumbersByColor(color) {
    return this.slots
      .filter(slot => slot.isOccupied && slot.car.color === color)
      .map(slot => slot.car.registrationNumber);
  }

  findSlotByRegistrationNumber(registrationNumber) {
    const slot = this.slots.find(slot => slot.isOccupied && slot.car.registrationNumber === registrationNumber);
    return slot ? slot.slotNumber : null;
  }

  findSlotsByColor(color) {
    return this.slots
      .filter(slot => slot.isOccupied && slot.car.color === color)
      .map(slot => slot.slotNumber);
  }
}

module.exports = ParkingLot;
