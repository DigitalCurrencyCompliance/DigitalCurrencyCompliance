#!/bin/bash
echo "Starting DCC4 service"
SERVER_PORT=$1 nohup node app.js &
exit 0
