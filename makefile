APP_NAME = vite-react-app
PORT = 8080

.PHONY: build run clean

build:
	docker build -t $(APP_NAME) .

run:
	docker run --rm -it -p $(PORT):8080 $(APP_NAME)

clean:
	docker rmi $(APP_NAME)
