const fs = require('fs');
const readline = require('readline');
const Car = require('./Car');
const ParkingLot = require('./ParkingLot');

let parkingLot = null;

function processCommand(command) {
    console.log(command)
    const parts = command.trim().split(' ');
    const action = parts[0];
    
    switch (action) {
        case 'create_parking_lot':
            const size = parseInt(parts[1]);
            parkingLot = new ParkingLot(size);
            console.log(`Created a parking lot with ${size} slots`);
            break;
        case 'park':
            if (parkingLot) {
                const car = new Car(parts[1], parts[2]);
                const slotNumber = parkingLot.parkCar(car);
                if (slotNumber) {
                    console.log(`Allocated slot number: ${slotNumber}`);
                } else {
                    console.log('Sorry, parking lot is full');
                }
            } else {
                console.log('Parking lot not created');
            }
            break;
        case 'leave':
            if (parkingLot) {
                const slotNumber = parseInt(parts[1]);
                const success = parkingLot.leaveSlot(slotNumber);
                if (success) {
                    console.log(`Slot number ${slotNumber} is free`);
                } else {
                    console.log(`Slot number ${slotNumber} is already free`);
                }
            } else {
                console.log('Parking lot not created');
            }
            break;
        case 'status':
            if (parkingLot) {
                const status = parkingLot.getStatus();
                console.log('Slot No.    Registration No    Colour');
                status.forEach(slot => {
                    console.log(`${slot.slotNumber}           ${slot.registrationNumber}      ${slot.color}`);
                });
            } else {
                console.log('Parking lot not created');
            }
            break;
        case 'registration_numbers_for_cars_with_colour':
            if (parkingLot) {
                const color = parts[1];
                const registrations = parkingLot.findRegistrationNumbersByColor(color);
                console.log(registrations.join(', '));
            } else {
                console.log('Parking lot not created');
            }
            break;
        case 'slot_numbers_for_cars_with_colour':
            if (parkingLot) {
                const color = parts[1];
                const slots = parkingLot.findSlotNumbersByColor(color);
                console.log(slots.join(', '));
            } else {
                console.log('Parking lot not created');
            }
            break;
        case 'slot_number_for_registration_number':
            if (parkingLot) {
                const registrationNumber = parts[1];
                const slotNumber = parkingLot.findSlotNumberByRegistrationNumber(registrationNumber);
                if (slotNumber) {
                    console.log(slotNumber);
                } else {
                    console.log('Not found');
                }
            } else {
                console.log('Parking lot not created');
            }
            break;
        case 'exit':
            process.exit(0);
        default:
            console.log('Invalid command');
    }
}

if (process.argv.length > 2) {
    const filePath = process.argv[2];
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (line) => {
        processCommand(line);
    });
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '$ '
    });

    rl.prompt();

    rl.on('line', (line) => {
        processCommand(line);
        rl.prompt();
    }).on('close', () => {
        console.log('Exiting');
        process.exit(0);
    });
}

