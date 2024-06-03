# Parking Lot Automation System
This project implements an automated ticketing system for a multi-storey parking lot using object-oriented programming principles in JavaScript.

# Table of Contents
- Overview
- Project Structure
- Setup
- Usage
- Interactive Mode
- File Input Mode
- Testing
- Docker
- Contributing
- License

# Overview
The system allows customers to park their cars in allocated slots, leave the parking lot, and query information about parked cars based on registration numbers and colors. It supports both interactive command-line inputs and file inputs for batch processing.

# Project Structure
The project follows a standard directory structure:

* bin/: Contains setup and run scripts.
* docker/: Includes Dockerfile for containerization.
* src/: Contains source code files.
* test/: Includes test files for unit and integration testing.
* .gitignore: Specifies files and directories to ignore in version control.
* README.md: Documentation file.

# Setup
Clone the repository to your local machine.
Ensure you have Node.js installed.
Navigate to the project directory.
Run npm install to install dependencies.

# Usage
- Interactive Mode
To run the program in interactive mode:
 npm start
Follow the prompts to execute commands interactively.

- File Input Mode
To run the program with commands from a file:
npm run start-file <path-to-input-file>
Replace <path-to-input-file> with the path to your input file containing commands.

Example input file (file_inputs.txt):


# Dummy data to test
create_parking_lot 6
park KA-01-HH-1234 White
park KA-01-HH-9999 White
leave 4
status
# Testing
Run tests using Jest:
npm test

# Docker
- Build a Docker image:
docker build -t parking_lot_image .

- Run a Docker container:
docker run -it --rm -p 3000:3000 parking_lot_image
Replace port numbers as necessary.

Contributing
Contributions are welcome! Fork the repository and submit a pull request.

License
This project is licensed under the MIT License.

