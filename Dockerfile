FROM node:lts

ARG NODE_ENV=development
ARG LD_LIBRARY_PATH=/usr/local/lib

RUN apt update -y

RUN mkdir -p /opt/oracle \
  && cd /opt/oracle

RUN wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basic-linuxx64.zip \
  && unzip instantclient-basic-linuxx64.zip \
  && apt install -y libaio1

RUN sh -c "echo /opt/oracle/instantclient_*_* > /etc/ld.so.conf.d/oracle-instantclient.conf" \
  && ldconfig \
  && export LD_LIBRARY_PATH=/opt/oracle/instantclient_*:$LD_LIBRARY_PATH

WORKDIR /node

COPY . .

RUN npm i

EXPOSE 3000
