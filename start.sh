#bin/sh
while true
do
echo Starting backend
node index.js >> /var/log/nginx/portfolio.dyfault.com/backend.log 2>&1
echo Restarting backend in 5 seconds...
sleep 5
done
