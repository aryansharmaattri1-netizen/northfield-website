# Deploy directly to Vercel from local folder
# This doesn't require GitHub repository

Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
npm i -g vercel

Write-Host "Deploying to Vercel..." -ForegroundColor Green
vercel --prod

Write-Host "`nYour website will be live at:" -ForegroundColor Cyan
Write-Host "https://openclaw-website.vercel.app" -ForegroundColor Green
Write-Host "`nAfter deployment, you can add custom domain in Vercel dashboard." -ForegroundColor Yellow