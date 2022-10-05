# base node image
FROM --platform=linux/amd64 node:16-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install prisma and overmind deps
RUN apt-get update 
RUN apt-get install -y openssl tmux procps vim git wget postgresql-client
RUN wget https://go.dev/dl/go1.19.1.linux-amd64.tar.gz
RUN tar -C /usr/local -xzf go1.19.1.linux-amd64.tar.gz

ENV PATH="${PATH}:/usr/local/go/bin:/root/go/bin"
RUN GO111MODULE=on go install github.com/DarthSim/overmind/v2@latest

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /myapp

ADD package.json .npmrc ./
RUN npm install --production=false

# Setup production node_modules
FROM base as production-deps

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json .npmrc ./
RUN npm prune --production

# Build the app
FROM base as build

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules

ADD prisma .
RUN npx prisma generate

ADD . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules
COPY --from=build /myapp/node_modules/.prisma /myapp/node_modules/.prisma

COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
COPY --from=build /myapp/scripts /myapp/scripts/
COPY --from=build /myapp/Procfile /myapp/Procfile
COPY --from=build /myapp/release.sh /myapp/release.sh

ADD . .

# For debugging container:
# ENTRYPOINT ["tail", "-f", "/dev/null"]

CMD ["overmind", "start"]