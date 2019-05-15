FROM alpine:latest

RUN apk update && apk add yarn

RUN mkdir /project

COPY ./buildchain/boot.sh ./
RUN chmod +x boot.sh

ENTRYPOINT ["./boot.sh"]
