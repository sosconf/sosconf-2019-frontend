docker pull sosconf/frontend:2019
docker rm -f sosconf-frontend | true
docker run -d -p 80:80 -p 443:443 --name="sosconf-frontend" -v /etc/letsencrypt/live/sosconf.org/:/etc/letsencrypt/live/sosconf.org/ -v /etc/letsencrypt/archive:/etc/letsencrypt/archive  catone/sosconf:frontend-test

