#!/bin/sh

inotifywait -m $SNIFFER_PCAP_LOG_DIR -e close_write |
    # GET LAST MODIFIED FILE IN LOG_DIR
    while read path action file; do
        echo $file
        curl -d '{"file":"'$file'"}' -H "Content-Type: application/json" -X POST $MONGODB_CLIENT_URL
    done