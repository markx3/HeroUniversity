# RegistroDeEstudantes

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 1.4.9.

Neste projeto, é possível cadastrar, listar e buscar estudantes. O front-end foi desenvolvido utilizando o Angular
e o back-end, Flask. O banco de dados escolhido foi o MongoDB.

## Como executar o projeto?

Para executar o projeto, alguns pacotes deverão ser instalados:

* MongoDB - criar banco `students`
* Python3 ou superior
* flask, flask_cors, pymongo`: `python3.5 -m pip install flask flask_cors pymongo`
* node, npm - rodar `npm install` na raiz do projeto
* `ng-cli`: `npm install -g @angular/cli`


## Development server

Execute o MongoDB.
Rode `ng serve` para um servidor dev. Navegue para `http://localhost:4200/`.
Para executar o back-end, rode `python3.5 mongo.py`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
