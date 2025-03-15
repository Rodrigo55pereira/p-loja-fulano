# 📱 Meu Projeto React Native com Expo Router

Bem-vindo ao **Meu Projeto**, um aplicativo desenvolvido com **React Native** utilizando **Expo Router** para navegação baseada em arquivos. 🚀

## 📌 Tecnologias Utilizadas

- **React Native** - Desenvolvimento mobile
- **Expo** - Framework para facilitar o desenvolvimento
- **Expo Router** - Sistema de navegação baseado em arquivos

## 📁 Estrutura de Navegação

O projeto segue a seguinte estrutura utilizando `expo-router`:

```
📦 app
 ┣ 📜 index.tsx  # Página inicial (Stack principal)
 ┣ 📂 (tabs)      # Tabs principais
 ┃ ┣ 📜 inicio.tsx  # Página de Início
 ┃ ┣ 📂 categorias  # Stack de categorias
 ┃ ┃ ┣ 📜 index.tsx  # Listagem de categorias
 ┃ ┃ ┗ 📜 [id].tsx  # Listagem de produtos de UMA categoria
 ┃ ┗ 📜 sobre.tsx  # Página "Sobre mim"
 ┗ 📜 produto.tsx  # Página de um produto único
```

## 🚀 Como Executar o Projeto

### 1️⃣ Clone o repositório

```sh
$ git clone https://github.com/seu-usuario/seu-repositorio.git
$ cd seu-repositorio
```

### 2️⃣ Instale as dependências

```sh
$ npm install  # ou yarn install
```

### 3️⃣ Inicie o Expo

```sh
$ npx expo start
```

Agora é só escanear o QR Code com o **Expo Go** ou rodar no emulador! 🚀

## 🛠 Configuração Adicional

Caso utilize **TypeScript**, lembre-se de instalar as tipagens adequadas:

```sh
$ npm install --save-dev @types/react @types/react-native
```

## 📝 Licença

Este projeto é **open-source** e está sob a licença **MIT**.

---

📌 **Criado por [Rodrigo Pereira de Moraes](https://github.com/Rodrigo55pereira/)** 🚀
