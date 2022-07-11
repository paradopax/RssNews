#!/bin/bash

# parse .env
export $(grep -v '^#' .env | xargs -d '\n')

# connect to db
psql