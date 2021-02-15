FROM alpine:3.12

ENV SNIFFER_IFACE enp0s3
ENV SNIFFER_FILTER "udp or tcp"
ENV SNIFFER_PCAP_LOG_DIR "/pcapLogs/"
ENV SNIFFER_PCAP_LOG_SIZE 10

COPY ./entrypoint.sh /

RUN apk update && \
    apk add net-tools iproute2 tcpdump

ENTRYPOINT [ "/entrypoint.sh" ]

