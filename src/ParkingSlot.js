class ParkingSlot {
  constructor(slotNumber) {
      this.slotNumber = slotNumber;
      this.isOccupied = false;
      this.car = null;
  }

  parkCar(car) {
      this.isOccupied = true;
      this.car = car;
  }

  leaveCar() {
      this.isOccupied = false;
      this.car = null;
  }
}

module.exports = ParkingSlot;
