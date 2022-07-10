#!/bin/bash

# parse .env
export $(grep -v '^#' .env | xargs -d '\n')

# execute initDB.sql file
psql $DB_CONNECTION_URL -a -f initDB.sql