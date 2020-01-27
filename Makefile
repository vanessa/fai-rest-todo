ARG := $(word 2, $(MAKECMDGOALS) )

clean:
	@find . -name "*.pyc" -exec rm -rf {} \;
	@find . -name "__pycache__" -delete

docker_test:
	docker-compose run --rm backend \
		python backend/manage.py test $(ARG) --parallel --keepdb

docker_testreset:
	docker-compose run --rm backend \
		python backend/manage.py test $(ARG) --parallel

docker_migrate:
	@docker-compose run --rm backend \
		python backend/manage.py migrate $(ARG)

docker_logs:
	@docker-compose logs --tail="20" -f $(ARG)

docker_makemigrations:
	@docker-compose run --rm backend \
		python backend/manage.py makemigrations $(ARG)

docker_shell:
	@docker-compose run --rm backend python manage.py shell

docker_stop_everything: # stops everything that's running in Docker in your computer
	@docker ps -a -q | xargs docker stop

docker_setup:
	cp -n frontend/.env.example frontend/.env || true
	cp -n backend/.env.example backend/.env || true
	@docker-compose build frontend
	@docker-compose build backend

docker_start:
	@docker-compose up -d backend
	@docker-compose logs --tail=20 -f backend frontend

docker_stop:
	@docker-compose down

setup: docker_makemigrations docker_migrate docker_setup docker_start
