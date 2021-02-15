# FROM ubuntu:20.04
FROM alpine:3.12

ENV SNIFFER_PCAP_LOG_DIR "/pcapLogs/"
ENV MONGODB_CLIENT_URL "http://mongo_client:3000/pcap"

COPY ./entrypoint.sh /

RUN apk update && \
    apk add curl inotify-tools

ENTRYPOINT [ "/entrypoint.sh" ]

