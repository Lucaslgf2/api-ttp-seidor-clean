FROM node:15

#Build Arguments
ARG PORT
ARG DATABASE_ENV

#Environment Variables
ENV PORT=$PORT
ENV DATABASE_ENV=$DATABASE_ENV

# Create app directory
WORKDIR /usr/src/api-ttp-seidor-clean

# Copy, Install and Build
COPY ./src/ ./src/
COPY ./package.json ./
COPY ./ormconfig.js ./
COPY ./tsconfig.json ./
COPY ./tsconfig-build.json ./
RUN rm -rf node_modules/
RUN rm -rf ./package-lock.json/
RUN rm -rf ./temp/uploads/
RUN mkdir -p ./temp/uploads/
RUN npm install --only=prod
RUN npm run build
RUN npm run typeorm migration:run --no-cache -- -c $DATABASE_ENV

EXPOSE 80
CMD [ "node", "dist/main/server.js" ]
