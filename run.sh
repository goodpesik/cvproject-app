npm install --legacy-peer-deps
npm run build
pm2 stop cv-project
pm2 delete cv-project
pm2 start npm --name cv-project -- start
