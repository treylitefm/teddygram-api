FROM ubuntu:trusty
MAINTAINER treylitefm

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y curl npm git
RUN npm install -g n gulp bower
RUN n stable
RUN npm install -g pm2

EXPOSE 8080

COPY entrypoint.sh /
WORKDIR /var/www
ENTRYPOINT ["/entrypoint.sh"]
