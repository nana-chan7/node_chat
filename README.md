# node_chat

## ① node.jsの初期化

    npm init -y

## ② モジュールのインストール

    npm i socket.io express dotenv nodemon

      1. Node.jsの初期化
            npm init -y
      2. Expressのインストール
            npm i express
      3. dotenvのインストール
            npm i dotenv
      4. Socket.ioのインストール
            npm i socket.io
      5. Node Monitorのインストール
            npm i nodemon

## ③ .env作成

    HOST=localhost
    PORT=3000

## ④ server.js作成(サーバープログラム)

## ⑤ package.jsonの"scripts"内にnpm run devのスクリプトを追加

     "scripts": {
      "dev": "nodemon server",
      "test": "echo \"Error: no test specified\" && exit 1"
      },

## ⑥ サーバプログラム「server.js」をコーディングしサーバー起動

    npm run dev

## ⑦ ブラウザでアクセス

     http://localhost:3000

### ※REDOME.md: マークダウン
