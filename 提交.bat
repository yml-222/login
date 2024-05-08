@echo on
cd /d %~dp0
::git add . && git commit -m 'yml' && git push
git add .
git commit -m 'yml'
git push
pause
