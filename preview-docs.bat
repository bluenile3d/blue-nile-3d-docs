@echo off
setlocal

title BLUE NILE 3D Tools and Add-On Documentation Preview
cd /d "%~dp0"

set "DOCS_PYTHON=.venv\Scripts\python.exe"
set "DOCS_URL=http://127.0.0.1:8000/blue-nile-3d-docs/"

if not exist "%DOCS_PYTHON%" (
    echo Creating the documentation environment...
    py -3.12 -m venv .venv
    if errorlevel 1 (
        echo.
        echo Could not create the Python environment.
        echo Install Python 3.12 or edit preview-docs.bat to use an installed Python version.
        goto :failed
    )
)

"%DOCS_PYTHON%" -c "import mkdocs" >nul 2>&1
if errorlevel 1 (
    echo Installing documentation requirements...
    "%DOCS_PYTHON%" -m pip install -r requirements.txt
    if errorlevel 1 goto :failed
)

echo.
echo BLUE NILE 3D tools and add-on documentation preview
echo %DOCS_URL%
echo.
echo Keep this window open while previewing the site.
echo Press Ctrl+C to stop the preview server.
echo.

if /i not "%~1"=="--no-browser" (
    start "" powershell.exe -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 2; Start-Process '%DOCS_URL%'"
)

"%DOCS_PYTHON%" -m mkdocs serve --dev-addr 127.0.0.1:8000
set "DOCS_EXIT_CODE=%ERRORLEVEL%"

if "%DOCS_EXIT_CODE%"=="0" goto :end
if "%DOCS_EXIT_CODE%"=="-1073741510" goto :end
goto :failed

:failed
echo.
echo The documentation preview could not be started.
pause
exit /b 1

:end
endlocal
