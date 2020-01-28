# Django + REST

Esse projeto exemplo foi criado para demonstrar como integrar seu projeto Django com frontends em JavaScript utilizando o [Django REST Framework](https://www.django-rest-framework.org/).

Foi usado o [django-react-boilerplate](https://github.com/vintasoftware/django-react-boilerplate/) para inicializá-lo.

## Instalando

* Clone esse repositório
* Digite `make setup`

## Comandos `make`

O make é uma ferramenta que ajuda o trabalho dos desenvolvedores facilitando alguns comandos criando atalhos que estão presentes em um arquivo chamado `Makefile`.

Todos os comandos devem ser chamados com o prefixo `make`, por exemplo: `make docker_start`

Alguns comandos importantes são:

* **`docker_start`**: inicia os containeres do backend e frontend
* **`docker_stop`**: para os containeres do backend e frontend
* **`docker_npm_install`**: instala alguma dependência do frontend no container, rebuildando o mesmo e iniciando logo em seguida
    * exemplo: `make docker_npm_install react-router`
* **`docker_stop_everything`**: para tudo que estiver rodando no Docker no seu computador
* muitos outros, cheque o Makefile
