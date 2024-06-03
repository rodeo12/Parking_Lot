#!/bin/bash

if [ -z "$1" ]; then
    echo "Running in interactive mode..."
    node ../src/index.js
else
    echo "Running with input file: $1"
    node ../src/index.js "$1"
fi

# Wait for user input before closing (if running interactively)
if [ -z "$1" ]; then
    read -p "Press any key to continue..."
fi
