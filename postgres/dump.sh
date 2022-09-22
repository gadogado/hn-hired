#!/bin/bash
# USAGE: env $(cat .env) postgres/dump.sh

pg_dump --clean --no-owner --no-acl $DATABASE_URL > postgres/test.sql
