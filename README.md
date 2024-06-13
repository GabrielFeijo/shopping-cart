# Projeto de Aprendizagem: Carrinho de Compras

Este projeto é uma solução para criar um carrinho de compras baseado no carrinho de compras de um E-Commerce, onde o carrinho armazena e calcula automaticamente o subtotal dos itens.

## 📦 Estrutura do Projeto

```plaintext
📦src
 ┣ 📜index.js
 ┣ 📂services
 ┃ ┣ 📜item.js
 ┃ ┗ 📜cart.js
```

## 📖 Funcionalidades

### Domínio da Aplicação: Carrinho de Compras

O projeto possui as seguintes funcionalidades principais:

### Carrinho

- Adicionar item no carrinho
- Deletar item do carrinho
- Remover um item (caso tenha mais de um item do mesmo tipo)
- Calcular o total

### Entidades Representadas

- Carrinho
- Item

### Regras de Negócio

- Adicionar item no carrinho: Permite adicionar um novo item ao carrinho.
- Deletar item do carrinho: Permite remover um item específico do carrinho.
- Remover um item: Permite remover um item caso tenha mais de um item do mesmo tipo.
- Calcular o total: Calcula o total de todos os itens no carrinho.

## 🚀 Começo

Estas instruções permitirão que você obtenha uma cópia de trabalho do projeto em sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
[Git](https://git-scm.com),
[NodeJS](https://nodejs.org/en).

Também é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

### 🎲 Colocando o projeto para funcionar localmente:

```bash
# Clone o repositório
$ git clone https://github.com/GabrielFeijo/shopping-cart
```

```bash
# Acesse a pasta do projeto em terminal/cmd
$ cd shopping-cart

# Instale as dependências
npm install

# Inicie a aplicação em DEV:
$ npm run start:dev
```

## 🛠️ Feito utilizando

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" width="40" height="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40" height="45" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" width="40" height="45" />
