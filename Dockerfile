FROM nginx:latest
#FROM nginx:alpine # TODO use lighter alpine version that is considerably smaller in size after debugging the code inside the container

COPY ./nginx_confs /etc/nginx/conf.d
COPY ./helloworld-devops-stack /usr/share/nginx/html
