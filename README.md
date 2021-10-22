## Description
News aggregator Restful API that uses The Guardian's and The New York Time's APIs.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Requests Examples

```zsh
# http://localhost:3000/articles/:source/:searchQuery
http://localhost:3000/articles/allSources/bitcoin # Get articles about "bitcoin" from both sources
http://localhost:3000/articles/tgdn/bitcoin       # Get articles about "bitcoin" from The Guardian
http://localhost:3000/articles/nyt/bitcoin        # Get articles about "bitcoin" from New York Times
```
