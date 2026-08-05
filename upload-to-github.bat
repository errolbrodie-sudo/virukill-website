@echo off
title Upload to GitHub
cd /d "%~dp0"
echo ===================================================
echo   Uploading Virukill Website to GitHub...
echo ===================================================
echo.
git push -u origin main
echo.
echo ===================================================
echo   Upload complete!
echo ===================================================
echo.
pause
