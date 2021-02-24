.PHONY: mongo-client mongo-watch notifier sniffer stack clean

mongo-client:
	docker build -t kosnet2/nnids_mongo_client:1.0.0-alpine3.12 mongo-client/.
	docker push kosnet2/nnids_mongo_client:1.0.0-alpine3.12

mongo-watch:
	docker build -t kosnet2/nnids_mongo_watch:latest mongo-watch/.
	docker push kosnet2/nnids_mongo_watch:latest

notifier:
	docker build -t kosnet2/nnids_notifier:1.0.0-alpine3.12 notifier/.
	docker push kosnet2/nnids_notifier:1.0.0-alpine3.12

sniffer:
	docker build -t kosnet2/nnids_sniffer:1.0.0-alpine3.12 sniffer/.
	docker push kosnet2/nnids_sniffer:1.0.0-alpine3.12

stack:
	docker stack deploy -c docker-compose.yml nnids_stack

clean:
	docker stack rm nnids_stack