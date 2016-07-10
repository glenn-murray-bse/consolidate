[![Coverage Status](https://coveralls.io/repos/github/glenn-murray-bse/consolidate/badge.svg?branch=master)](https://coveralls.io/github/glenn-murray-bse/consolidate?branch=master)

[![Build Status](https://circleci.com/gh/glenn-murray-bse/consolidate/tree/master.svg?style=shield&circle-token=e1fc557eb5a3f854a391c9425d281a7c9c86d5b8)](https://circleci.com/gh/glenn-murray-bse/consolidate/tree/master)

# Run development server

Will reload on file changes

    npm start

*TODO* implement real hot module reloading

# Continously run tests

    npm test

# Deploy to continuous integration server

    git push

# Continuous integration

Circle CI will run the test coverage and eventually deploy to firebase

## Run test coverage

    npm run test:circleci

## Build production deployment (work in progress)

    npm publish

