# PowerShell script to push to GitHub
# First: Go to https://github.com/new and create repository named "northfield-website"
# Then replace YOUR_GITHUB_USERNAME below with your actual GitHub username

$githubUsername = "YOUR_GITHUB_USERNAME"

Write-Host "Step 1: Removing any existing remote..." -ForegroundColor Yellow
git remote remove origin 2>$null

Write-Host "Step 2: Adding new remote..." -ForegroundColor Yellow
git remote add origin "https://github.com/$githubUsername/northfield-website.git"

Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "`nIf you get 'repository not found' error:" -ForegroundColor Red
Write-Host "1. Go to https://github.com/new" -ForegroundColor Cyan
Write-Host "2. Create repository named 'northfield-website'" -ForegroundColor Cyan
Write-Host "3. DON'T initialize with README, .gitignore, or license" -ForegroundColor Cyan
Write-Host "4. Update the githubUsername variable above with YOUR username" -ForegroundColor Cyan
Write-Host "5. Run this script again" -ForegroundColor Cyan