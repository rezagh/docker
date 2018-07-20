FROM alpine
LABEL maintainer "Reza"
RUN apk add --update nodejs nodejs-npm
COPY . /src
WORKDIR /src
EXPOSE 8080
ENTRYPOINT ["node","./hello.js"]
