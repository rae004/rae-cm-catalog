FROM public.ecr.aws/docker/library/node:20-alpine
# Set default port to 5000
ARG SERVER_PORT=5000
# Create app directory
WORKDIR /usr/src/app
# copy configs to install dependacies.
COPY package.json yarn.lock tsconfig.json ./
# Install app dependencies
RUN yarn install --frozen-lockfile && yarn cache clean
# Bundle app source
COPY . .
# Expose or override port
EXPOSE ${SERVER_PORT}
# Default start command
CMD ["yarn", "start:prod"]