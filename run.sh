git pull origin main
sudo rm -rf node_modules
npm install
npm run build
pm2 stop cv-project
pm2 delete cv-project
pm2 start npm --name cv-project -- start
