#!/usr/bin/env sh

npx prisma generate
npx prisma migrate deploy
npx prisma db seed
