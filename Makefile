BINARY_NAME=main

dev:
	go run main.go serve --http 0.0.0.0:8090

build:
	go build main.go

start:
	./main serve --http 0.0.0.0:8090