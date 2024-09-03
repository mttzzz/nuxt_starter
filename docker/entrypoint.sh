#!/bin/sh

trap 'kill -TERM $PID' TERM INT


npx prisma migrate deploy



exec supervisord -n -c /app/docker/supervisord.conf &
PID=$!
wait $PID
trap - TERM INT
wait $PID
EXIT_STATUS=$?
