@echo off
echo ============================================
echo Syncing fixed files to GitHub dev branch
echo ============================================

echo 1. Ensuring we're on dev branch...
git checkout dev

echo 2. Adding all changed files to Git...
git add .

echo 3. Committing changes...
git commit -m "Fix mobile menu links - auto-close menu on link click"

echo 4. Pushing to dev branch only...
git push origin dev

echo ============================================
echo Done! Your changes have been pushed to the dev branch.
echo ============================================
