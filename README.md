# Indice-de-massa-corporal-imc

Aplicação para fazer cálculo de índice de massa corporal (IMC)

[![bagde](https://img.shields.io/badge/site-calculador_imc-blue)](https://calculador-imc.herokuapp.com/)
[![GitHub issues](https://img.shields.io/github/issues/josedembo/indice-de-massa-corporal-imc)](https://github.com/josedembo/indice-de-massa-corporal-imc/issues)
[![GitHub forks](https://img.shields.io/github/forks/josedembo/indice-de-massa-corporal-imc)](https://github.com/josedembo/indice-de-massa-corporal-imc/network)
[![GitHub stars](https://img.shields.io/github/stars/josedembo/indice-de-massa-corporal-imc)](https://github.com/josedembo/indice-de-massa-corporal-imc/stargazers)
[![GitHub license](https://img.shields.io/github/license/josedembo/indice-de-massa-corporal-imc)](https://github.com/josedembo/indice-de-massa-corporal-imc)

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#indice-de-massa-corporal-imc)
   * [Tabela de Conteudo](#tabela-de-conteúdos)
   * [Como Rodar o projeto](#como-rodar-o-projeto)
      * [Pre Requisitos](#pré-requisitos)
      * [dependências](#dependências)
      * [Rodando o Back End (servidor)](#rodando-o-back-end)
      * [Docker](#docker)
   * [Tecnologias](#tecnologias)
   * [Autor](#autor)
<!--te-->

# Como Rodar o projeto

### Pré-requisitos

Antes de começar a rodaro projeto, você vai precisar instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/)

Após isso é recomendável a instalação de um editor de código(caso não tenha), como o [VSCode](https://code.visualstudio.com/)

### dependências
<!--ts-->
   * [pacotes](#Sobre)
      * [express](https://expressjs.com/pt-br/)
      * [ejs](https://ejs.co/)
      * [cors](http://expressjs.com/en/resources/middleware/cors.html)
      * [body-parser](https://www.npmjs.com/package/body-parser)
      * para ver a versões de cada pacote pode acesse o [package.json](https://github.com/josedembo/indice-de-massa-corporal-imc/blob/main/package.json) do projeto
      
<!--te-->

### Rodando o Back End

```bash
# Clone este repositório
$ git clone <https://github.com/josedembo/indice-de-massa-corporal-imc>

# Acesse a pasta do projeto no terminal/cmd
$ cd CappacitaMovies

# Instale as dependências
$ npm install 

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor estará rodando  na porta:8080
```
### Docker 
 * para rodar a aplicação via imagem docker: baixe a imagem com o comando `docker push josedembo/calculador-imc:tagname` no repositório [Josedembo\calculador-imc](https://hub.docker.com/repository/docker/josedembo/calculador-imc) e rodar o container com o comando `docker container run -d -p 8080:8080 josedembo/calculador-imc:v2.0`, ou pode simplismente rodar o container.
 *

## Tecnologias
As ferramentas abaixo foram usadas para a construção do projeto: 

- [x] [Node.js](https://nodejs.org/en/)
- [x] [EJS](https://ejs.co/)
- [x] [bootstrap](https://getbootstrap.com/)
- [x] [Docker](https://www.docker.com/)
- [x] [Heroku](https://www.heroku.com/)


# Autor
---

<a href="https://github.com/josedembo">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/68882941?s=400&u=d518c6c61763405cd84f0d90e75f64845c37495c&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>José Pedro Daniel Dembo</b></sub></a> <a href="https://github.com/josedembo" title="josedembo">🚀</a>


Primeiro grande projeto feito com muita dedicação e ❤️
 
[![Linkedin Badge](https://img.shields.io/badge/-josedembo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/josedembo/)](https://www.linkedin.com/in/josedembo/) 
