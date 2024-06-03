@echo off
if "%1"=="" (
    echo Running in interactive mode...
    rem Add command to run the application interactively
) else (
    echo Running with input file: %1
    rem Add command to run the application with a file input
)