FROM python:3.8-slim

ENV PYTHONUNBUFFERED 1

RUN groupadd user && useradd --create-home --home-dir /home/user -g user user
WORKDIR /home/user/app

# Install system dependencies

RUN apt-get update && apt-get install gcc build-essential libpq-dev -y && \
    python3 -m pip install --no-cache-dir pip-tools

# install Python dependencies

COPY requirements.txt /home/user/app
RUN pip install -r requirements.txt

# Clean the house

RUN apt-get purge libpq-dev -y && apt-get autoremove -y && \
    rm /var/lib/apt/lists/* rm -rf /var/cache/apt/*

ADD backend/ /home/user/app

USER user
CMD python manage.py runserver 0.0.0.0:8000
