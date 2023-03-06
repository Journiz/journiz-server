BINARY_NAME=main

dev:
	go run main.go serve --http 0.0.0.0:8090

build:
	go build main.go

start:
	./main serve --http 0.0.0.0:8090

deploy-staging:
	git checkout staging && git pull && git merge develop && git push && git checkout develop

deploy-prod:
	git checkout main && git pull && git merge staging && git push && git checkout develop
