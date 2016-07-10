[![Coverage Status](https://coveralls.io/repos/github/glenn-murray-bse/consolidate/badge.svg?branch=master)](https://coveralls.io/github/glenn-murray-bse/consolidate?branch=master) [![Build Status](https://circleci.com/gh/glenn-murray-bse/consolidate/tree/master.svg?style=shield&circle-token=e1fc557eb5a3f854a391c9425d281a7c9c86d5b8)](https://circleci.com/gh/glenn-murray-bse/consolidate/tree/master)

# Run development server

    npm start

Will reload browser on file changes

*TODO* implement real hot module reloading (as opposed to full page refresh)

# Continously run tests

    npm test

Will re-run tests when any files change.

# Deploy to continuous integration server

    git push

Will initiate [continuous integration server build]()

# Continuous integration

Circle CI will run the test coverage and eventually deploy to firebase

## Run test coverage

    npm run test:circleci

## Build production deployment (work in progress)

    npm publish

