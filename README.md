# 📱 Meu Projeto React Native com Expo Router

Bem-vindo ao **Meu Projeto**, um aplicativo desenvolvido com **React Native** utilizando **Expo Router** para navegação baseada em arquivos. 🚀

## 📌 Tecnologias Utilizadas

- **React Native** - Desenvolvimento mobile
- **Expo** - Framework para facilitar o desenvolvimento
- **Expo Router** - Sistema de navegação baseado em arquivos
- **React Native Safe Area Context** - Gerenciamento de áreas seguras
- **React Native Screens** - Otimização de telas
- **Expo Linking** - Manipulação de links
- **Expo Constants** - Acesso a constantes nativas

## 💁️‍♂️ Estrutura de Navegação

O projeto segue a seguinte estrutura utilizando `expo-router`:

```
📺 app
 └── 📂 (tabs)      # Navegação principal em abas
     ├── 📄 _layout.tsx  # Layout das abas
     ├── 📄 about.tsx  # Página "Sobre"
     ├── 📂 categories  # Stack de categorias
     │   ├── 📄 _layout.tsx  # Layout de categorias
     │   ├── 📄 list.tsx  # Listagem de categorias
     │   └── 📄 [id].tsx  # Produtos de uma categoria específica
     ├── 📄 home.tsx  # Página inicial
 ├── 📄 _layout.tsx  # Layout principal
 ├── 📄 index.tsx  # Página inicial do Stack principal
 └── 📂 product  # Detalhes de um produto
     └── 📄 [id].tsx  # Detalhes de um produto específico
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

## 🛠 Bibliotecas Utilizadas

A seguir, as bibliotecas utilizadas no projeto, conforme `package.json`:

```json
{
  "dependencies": {
    "expo": "~52.0.38",
    "expo-status-bar": "~2.0.1",
    "react": "18.3.1",
    "react-native": "0.76.7",
    "expo-router": "~4.0.19",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.4.0",
    "expo-linking": "~7.0.5",
    "expo-constants": "~17.0.8"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@types/react": "~18.3.12",
    "typescript": "^5.3.3"
  }
}
```

## 📝 Licença

Este projeto é **open-source** e está sob a licença **MIT**.

---

📌 **Criado por [Rodrigo Pereira de Moraes](https://github.com/Rodrigo55pereira/)** 🚀
