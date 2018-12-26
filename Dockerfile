FROM debian:7-slim
LABEL description = 'Network Agent to detect devices on the network'

RUN apt-get update -y
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs wireless-tools

RUN mkdir -p /app

ADD src /app/src
ADD package.json /app/

RUN npm install

CMD npm start

