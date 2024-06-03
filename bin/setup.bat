@echo off
echo Setting up the project environment...

rem Check for Node.js installation
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install Node.js from https://nodejs.org/ and run this script again.
    exit /b 1
)

rem Install project dependencies
echo Installing project dependencies...
npm install

rem Run tests to verify setup
echo Running initial tests...
npm test

echo Setup completed successfully.
