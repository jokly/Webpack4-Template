PWD = $(shell pwd)

docker: docker_build docker_run

docker_build:
	docker build -t jokly/node .
docker_run:
	docker run --rm -it -p 8080:8080 -v $(PWD):/usr/src/app jokly/node bash
