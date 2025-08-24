@echo off
echo ============================================
echo Syncing fixed files to GitHub main and dev branches
echo ============================================

echo 1. Adding all changed files to Git...
git add .

echo 2. Committing changes...
git commit -m "Fix navbar alignment issue while maintaining dark mode functionality"

echo 3. Pushing to dev branch...
git checkout dev
git pull origin dev
git merge main
git push origin dev

echo 4. Pushing to main branch...
git checkout main
git pull origin main
git merge dev
git push origin main

echo ============================================
echo Done! Your changes have been pushed to both main and dev branches.
echo ============================================
