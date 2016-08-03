FROM node:6.3.1-wheezy

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./src /usr/src/app

# Build app
RUN npm run build

EXPOSE 8060
CMD [ "npm", "start" ]
