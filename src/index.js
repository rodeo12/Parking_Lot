// src/ParkingSlot.js

class ParkingSlot {
    constructor(slotNumber) {
      this.slotNumber = slotNumber;
      this.isOccupied = false;
      this.car = null;
    }
  
    park(car) {
      this.car = car;
      this.isOccupied = true;
    }
  
    leave() {
      this.car = null;
      this.isOccupied = false;
    }
  }
  
  module.exports = ParkingSlot;
  