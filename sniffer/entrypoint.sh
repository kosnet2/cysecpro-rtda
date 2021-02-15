#!/bin/sh

tcpdump -C $SNIFFER_PCAP_LOG_SIZE \
        -w "${SNIFFER_PCAP_LOG_DIR}log.pcap.$(date +%s)" \
        -i $SNIFFER_IFACE \
        -Z "root" \
        $SNIFFER_FILTER 
