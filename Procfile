web: gunicorn fai_rest_todo.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: celery worker --workdir backend --app=fai_rest_todo --loglevel=info
