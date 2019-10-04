FROM node:lts-jessie

RUN apt-get update -y && apt-get install python -y

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY . .

# install project dependencies
RUN npm install 

# # build app for production with minification
RUN npm run build

ENV HOST 0.0.0.0
