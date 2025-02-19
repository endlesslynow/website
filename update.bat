@echo off
echo Starting website update process...

:: Change to the website directory
cd /d C:\Users\zacah\Desktop\The Website
if %errorlevel% neq 0 (
    echo Failed to change directory!
    goto :error
)

:: Check Git status
echo Checking Git status...
git status
if %errorlevel% neq 0 (
    echo Git status check failed!
    goto :error
)

:: Add all changes
echo Adding all changes to Git...
git add .
if %errorlevel% neq 0 (
    echo Failed to add changes!
    goto :error
)

:: Commit changes
echo Committing changes...
git commit -m "Updated website content"
if %errorlevel% neq 0 (
    echo Commit failed!
    goto :error
)

:: Push to GitHub
echo Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo Push failed!
    goto :error
)

echo Website update completed successfully!
timeout /t 3
exit /b 0

:error
echo An error occurred! The script will close in 10 seconds...
timeout /t 10
exit /b 1