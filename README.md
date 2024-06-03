## Parking Lot Automation System

# Introduction
The Parking Lot Automation System is a command-line-based application designed to automate parking lot operations. It handles tasks such as ticket issuance, parking slot allocation, and car tracking with minimal human intervention.

# Table of Contents
- Overview
- Project Structure
- Video Walkthrough of the project & codebase
- Features
- Design Decisions or Assumptions
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
* docker: Includes Dockerfile for containerization.
* src/: Contains source code files.
* test/: Includes test files for unit and integration testing.
* .gitignore: Specifies files and directories to ignore in version control.
* README.md: Documentation file.

# Video Walkthrough of the project & codebase

# Features
* Automated ticket issuance
* Parking slot allocation
* Car tracking by registration number and color
* Interactive command-line interface

# Design Decisions or Assumptions
* The application assumes a predefined parking lot structure with a fixed number of slots.
* Each parking slot can accommodate one car.
* Cars are identified by their registration numbers and colors.

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

# Execution Steps To Run Bat file
1. Navigate to the bin Directory:
 cd <path to the file>\parking_lot\bin

2. Run the parking_lot.bat with File Input:
 .\parking_lot.bat ..\test\file_inputs.txt

3. Run the parking_lot.bat in Interactive Mode:
 .\parking_lot.bat

# Execution Steps To Run Bash file
1. Navigate to the bin Directory:
 cd path/to/your/directory/parking_lot\bin

2. Run the parking_lot.sh with File Input:
  ./parking_lot.sh ../test/file_inputs.txt

3. Run the parking_lot.bat in Interactive Mode:
  ./parking_lot.sh


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

# Contributing
Contributions are welcome! Fork the repository and submit a pull request.

# License
This project is licensed under the MIT License.

