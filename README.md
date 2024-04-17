# BOSS
A Discord.js module to simplify your music commands and play songs with audio filters on Discord without any API key.

## Features
* Based on `@discord/voice` and `@discord.js/voice`
* Easy to use snd customiza
* Support Spotify songs

## Requirement
* [Node.js 20 or higher](https://nodejs.org/en/download/)
* [FFmpeg](https://www.ffmpeg.org/download.html/)

## Tutorial
### Docker
> Copy the `.env.example` file to `.env` and fill in the required fields.


Docker build
```sh
docker build -t boss .
```

Docker compose
```sh
docker-compose up -d
```

### Non-Docker
> Copy the `.env.example` file to `.env` and fill in the required fields.

Install all dependencies
```sh
npm install
```
Start the bot
```sh
npm run start
```

## Documentation
Read the [Discord.js](https://discord.js.org/) documentation, and the [Distube](https://distube.js.org/#/) with the properties and events to more details.
