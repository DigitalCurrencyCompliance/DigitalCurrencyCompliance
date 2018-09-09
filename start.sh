#!/bin/bash
echo "Starting DCC6 service"
npm rebuild
SERVER_PORT=$1 nohup node app.js &
exit 0
