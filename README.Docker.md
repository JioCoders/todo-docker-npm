├── docker-nodejs-sample/
│ ├── db/
│ │ └── password.txt
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

docker images
docker start [container_id]
docker stop [container_id]
docker ps
docker ps -a
docker pull [image_name]
docker push [image_name]
docker logs [container_name]

# cmd for build an image from Dockerfile

docker build -f 'Dockerfile' -t harry2024/emp-nodejs --label harry2024/empnodejss .

docker run -it -e PORT=4000 -p 4000:4000 --name my_container harry2024/emp-nodejs
docker exec -it [container_name] bash
docker exec -it [container_name] sh

# cmd for docker-compose.yml

version: '3.8'
services:
nginx:
image: nginx:1.11.8-alpine
ports: - "8081:80"
volumes: - harry-vol2:/usr/src/data
volumes:
harry-vol2:
driver: local
driver_opts:
o: bind
type: none
device: C:/Users/HARI/OneDrive/Desktop/docker-volume

docker-compose up
docker-compose down
docker-compose up -d
docker-compose up --build -d

# cmd for docker-notworking->bridge,host,none[default_network,user_defined]

network inspect bridge
docker network ls
docker run -it --network=host harry2024/empnodejs
docker network create -d bridge [network_name]
docker run -it --network=[network_name] --name iron-man harry2024/empnodejs
docker network connect [userdefined_network] [default_network_container_name]

# [this container will be auto delete after container stopped]

docker run -itd --network [network_name] --name [container_name] --rm [image_name]

# cmd for docker-volume

docker volume create --name harry-vol2 --opt type=none --opt device=C:/Users/HARI/OneDrive/Desktop/docker-volume --opt o=bind

docker run -it -d --name harri-nginx -v harry-vol2:/app nginx:1.11.8-alpine

docker run -it -v [my_path]:[docker_path] --name [container_name] [image_name]
docker run -it -v C:/Users/HARI/OneDrive/Desktop/docker-volume:/home/docker-vol --name ubu-volu ubuntu
docker volume create harry-vol1 --label harry-vol
docker run -it -v harry-vol1:/app --name my_container ubuntu
docker volume ls
docker volume inspect harry-vol1
docker volume rm [volume_name]