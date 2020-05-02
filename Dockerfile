FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY /web/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
