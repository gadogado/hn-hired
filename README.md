# hn-hired

> https://hnhired.fly.dev

> A small ⚛️ remixjs + 🐘 prisma app running on 🎈 fly.io that grabs all of the latest ycombinator.com **'who's hiring'** posts


### Running locally

1. ```npm install```
2. Create an .env file: ```cp .env.example .env```
3. hn-hired uses the [Prisma](https://www.prisma.io/docs/concepts/database-connectors/postgresql) ORM with Postgres.  You'll need to create a new local db and update the `.env` value for `DATABASE_URL=` with the respective db url, e.g., `postgresql://postgres:postgres@localhost:5432/postgres` `(postgresql://USER:PASSWORD@HOST:PORT/DATABASE)` 
4.  When hn-hired grabs items from firebase it normalizes the item text and associates any preconfigured 'tags' that match the text.  You'll need to seed the database with these tags as well as generate the client and run migrations: ```npm run setup``` - if there's any issues locally w/ the migrations you might need to `npx prisma db push`
5.  Build the app: ```npm run build```
6.  Run the process that grabs, normalizes, and persists the ycombinator job post items and stories: ```npm run manual-get-latest``` NOTE:  You can optionally increase how effective the `Promise.all` is when fetching firebase items by changing (increase) the `.env` value `CONCURRENCY_LIMIT=`. This largely depends on the architecture of your local machine.  
7.  Run the server: ```npm run dev``` and visit `http://localhost:3000`

### Design

1.  I used used Figma for a first pass on the designs here: https://figma.com/file/cdelfyxq1MfUet9K1dzogg/hnhired?node-id=2%3A3

### Testing the Docker container locally

- First build the container within the root of the project: `docker build -t hnhired-dev .`
- When run locally the current entrypoint in the Dockerfile causes the container to spin up and then immediately terminate which makes debugging impossible.  For debugging the container you can pass an alternate entrypoint command that won't exit: `docker run -it --entrypoint=/bin/bash hnhired-dev` 
