# backend-nodejs

> API DEV-CHALLENGE TEST

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies


    cd path/to/backend-nodejs
    yarn install


3. Start your app

   yarn start

   server run in localhost:3030

## I emphasize that the added data is not 100% real.

## this is the collection for POSTMAN app.
DEV-CHALLENGE-API.postman_collection

## Api Methods


## AUTHENTICATION
    http://localhost:3030/users

## POST - EXAMPLE
    {
        "strategy": "local",
        "email": "dev-challenge@dev.com",
        "password": "challenge2022"
    }

## LOGIN
    http://localhost:3030/authentication

## POST - EXAMPLE
    {
        "strategy": "local",
        "email": "dev-challenge@dev.com",
        "password": "challenge2022"
    }


## GET, POST, DELETE (REQUIERED AUTH: FALSE)

http://localhost:3030/movies
http://localhost:3030/tv-show
http://localhost:3030/directors
http://localhost:3030/actors
# dev-challenger-test
