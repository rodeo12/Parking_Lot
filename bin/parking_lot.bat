if "%1"=="" (
    echo Running in interactive mode...
    node ..\src\index.js
) else (
    echo Running with input file: %1
    node ..\src\index.js %1
)