# docker-compose-multi-service
A system based on Nginx, React, Nodejs, Postgres, Redis with the multiple docker containers managed by docker compose


## Development env
> docker-compose -f docker-compose-dev.yml up

Land to react page via visit (localhost:3000)[http://localhost:3000]

GET /api/hello-world request data from node server
(localhost:8081/api/hello-world)[http://localhost:8081/api/hello-world]

GET /api/postgres request data from postgres
(localhost:8081/api/postgres)[http://localhost:8081/api/postgres]


## Production env
> docker-compose -f docker-compose-prod.yml up

Don't need to install dev pendencies and npm start in production env, host both web and server in nginx
Land to react page via visit (localhost)[http://localhost]

GET /api/hello-world request data from node server
(localhost/api/hello-world)[http://localhost/api/hello-world]

GET /api/postgres request data from postgres
(localhost/api/postgres)[http://localhost/api/postgres]

