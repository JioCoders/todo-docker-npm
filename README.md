├── docker-nodejs-sample/
│ ├── spec/
│ ├── src/
│ ├── .dockerignore
│ ├── .gitignore
│ ├── compose.yaml
│ ├── Dockerfile
│ ├── package-lock.json
│ ├── package.json
│ ├── README.Docker.md
│ └── README.md

# cmds

docker run -p 9090:9090 -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml -v harry-vol2:/prometheus prom/prometheus
