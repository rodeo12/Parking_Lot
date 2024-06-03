
### `setup.sh`

You also need the setup script in bash, equivalent to `setup.bat`.

```bash
#!/bin/bash

echo "Setting up the project environment..."

# Check for Node.js installation
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Please install Node.js from https://nodejs.org/ and run this script again."
    exit 1
fi

# Install project dependencies
echo "Installing project dependencies..."
npm install

# Run tests to verify setup
echo "Running initial tests..."
npm test

echo "Setup completed successfully."
