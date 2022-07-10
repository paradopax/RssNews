#!/bin/bash

# parse .env
export $(grep -v '^#' .env | xargs -d '\n')

# execute initDB.sql file
psql -a -f dbFile/initDB.sql