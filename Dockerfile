FROM nginx:latest

COPY ./nginx_confs /etc/nginx/conf.d
COPY ./helloworld-devops-stack /usr/share/nginx/html
