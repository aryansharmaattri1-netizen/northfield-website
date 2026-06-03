#!/bin/bash
# Script to push to GitHub
# First: Go to https://github.com/new and create repository named "openclaw-website"
# Then replace YOUR_GITHUB_USERNAME below with your actual GitHub username

GITHUB_USERNAME="YOUR_GITHUB_USERNAME"

echo "Step 1: Removing any existing remote..."
git remote remove origin 2>/dev/null

echo "Step 2: Adding new remote..."
git remote add origin "https://github.com/$GITHUB_USERNAME/openclaw-website.git"

echo "Step 3: Pushing to GitHub..."
git push -u origin main

echo -e "\nIf you get 'repository not found' error:"
echo "  1. Go to https://github.com/new"
echo "  2. Create repository named 'openclaw-website'"
echo "  3. DON'T initialize with README, .gitignore, or license"
echo "  4. Update the GITHUB_USERNAME variable above with YOUR username"
echo "  5. Run this script again"