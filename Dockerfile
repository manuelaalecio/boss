FROM node:20-slim

RUN apt-get update

RUN apt-get install -y build-essential libtool ffmpeg

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm", "run", "start"]
