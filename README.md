# docker-compose-multi-service
A system based on Nginx, React, Nodejs, Postgres, Redis with the multiple docker containers managed by docker compose

## Git clone
```
git clone git@github.com:banshengbushu/docker-compose-multi-service.git
```

## For Development Env
```
docker-compose -f docker-compose-dev.yml up
```

**Visit web page**

Open with browser [`localhost:3000`](http://localhost:3000)

**GET `/api/hello-world` request data from node server**

Open with browser [`localhost:8081/api/hello-world`](http://localhost:8081/api/hello-world)

**GET `/api/postgres` request data from postgres**

Open with browser [`localhost:8081/api/postgres`](http://localhost:8081/api/postgres)


## For Production Env
Don't need to install dev pendencies and npm start in production env, both web and server be hosted in nginx 80 port

```
docker-compose -f docker-compose-prod.yml up
```


**Visit web page**

Open with browser [`localhost`](http://localhost)

**GET `/api/hello-world` request data from node server**

Open with browser [`localhost/api/hello-world`](http://localhost/api/hello-world)

**GET `/api/postgres` request data from postgres**

Open with browser [`localhost/api/postgres`](http://localhost/api/postgres)

## For Front-end running in docker only
```
docker-compose -f docker-compose-frontend.yml up
```

**Visit web page**

Open with browser [`localhost:3000`](http://localhost:3000)

## For Back-end running in docker only
```
docker-compose -f docker-compose-backend.yml up
```

**Test API**

**GET `/api/hello-world`**

Open with browser [`localhost:8081/api/hello-world`](http://localhost:8081/api/hello-world)

**GET `/api/postgres`**

Open with browser [`localhost:8081/api/postgres`](http://localhost:8081/api/postgres)