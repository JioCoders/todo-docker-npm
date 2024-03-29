## Folder structure:

```
  ├── app.js       - starting point of the application
  ├── config
  │   └── db.js    - contains api database connection
  ├── constants    - contains commonly used constants
  ├── controllers
  │   └── platform - contains business logic
  ├── jobs         - cron jobs
  ├── models       - models of application
  ├── postman      - postman collection files
  ├── routes       - contains all the routes of application
  ├── services     - contains commonly used services
  ├── views        - templates
  └── utils        - contains utility functions
```

[![Manual workflow](https://github.com/JioCoders/todo-docker-npm/actions/workflows/manual.yml/badge.svg)](https://github.com/JioCoders/todo-docker-npm/actions/workflows/manual.yml)
[![Docker](https://github.com/JioCoders/todo-docker-npm/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/JioCoders/todo-docker-npm/actions/workflows/docker-publish.yml)
[![Docker Image CI](https://github.com/JioCoders/todo-docker-npm/actions/workflows/docker-image.yml/badge.svg)](https://github.com/JioCoders/todo-docker-npm/actions/workflows/docker-image.yml)
[![Node.js CI](https://github.com/JioCoders/todo-docker-npm/actions/workflows/node.js.yml/badge.svg)](https://github.com/JioCoders/todo-docker-npm/actions/workflows/node.js.yml)
[![CodeQL](https://github.com/JioCoders/todo-docker-npm/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/JioCoders/todo-docker-npm/actions/workflows/github-code-scanning/codeql)
[![Build and Deploy to GKE](https://github.com/JioCoders/todo-docker-npm/actions/workflows/google.yml/badge.svg)](https://github.com/JioCoders/todo-docker-npm/actions/workflows/google.yml)
<a href="https://postgresql.org"><img src="https://img.shields.io/badge/Powered%20by-PostgreSQL-blue.svg"/></a>

# cmds

`$ docker run -p 9090:9090 -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml -v harry-vol2:/prometheus prom/prometheus`

# nodejs-posgresql

`$ A demo Quotes REST API using Node.js and PostgreSQL. Built with Express Js for this [Node.js PostgreSQL tutorial](https://geshan.com.np/blog/2021/01/nodejs-postgresql-tutorial/).`

## Deploy with Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/geshan/nodejs-posgresql/tree/master)

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fgeshan%2Fnodejs-posgresql)

## Deploy to [Cyclic](https://app.cyclic.sh/#/join/geshan)

[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)

## Deploy to [Render](https://render.com?utm_source=geshan.com.np)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

### Running on Vercel

At: [https://nodejs-postgresql.vercel.app/quotes](https://nodejs-postgresql.vercel.app/quotes)
