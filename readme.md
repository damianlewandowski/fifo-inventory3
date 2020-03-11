# Ts.ED - TypeORM

Here an example project with TypeORM and Ts.ED framework.

See [Ts.ED](https://tsed.io) project for more information.

## Features

- Docker and Docker compose
- Travis CI
- TypeORM

[<img src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png" height="100" />](https://docker.com)
[<img src="https://travis-ci.com/images/logos/TravisCI-Mascot-pride.png" height="100" />](https://travis-ci.org)
[<img src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png" height="100" />](https://typeorm.io/)


## Checkout

This repository provide getting started project example for each Ts.ED version since `v5.18.1`.

```bash
git checkout -b https://github.com/TypedProject/tsed-example-typeorm/tree/v5.18.1
```

To checkout another version just replace `v5.18.1` by the desired version.

## Install

> **Important!** Ts.ED requires Node >= 8, Express >= 4 and TypeScript >= 3.

```batch
yarn install
```

# Start with Docker

Run:
```
yarn docker:build
docker-compose up
```

## Access to postgres: 

* `localhost:5432`
* **Username:** postgres (as a default)
* **Password:** changeme (as a default)

## Access to PgAdmin: 
* **URL:** `http://localhost:5050`
* **Username:** pgadmin4@pgadmin.org (as a default)
* **Password:** admin (as a default)

## Add a new server in PgAdmin:
* **Host name/address** `postgres`
* **Port** `5432`
* **Username** as `POSTGRES_USER`, by default: `postgres`
* **Password** as `POSTGRES_PASSWORD`, by default `changeme`

