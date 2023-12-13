// 2023-12-13 4.week3

// Express の作成
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
// publicフォルダを、Web公開
app.use(express.static(__dirname + '/public'));

// HTTPサーバの作成
const { createServer } = require('node:http');
const server = createServer(app);

// 環境変数の読み込み
const dotenv = require('dotenv');
dotenv.config();
const host = process.env.HOST;
const port = process.env.PORT;

// Socket.ioで通信 (io: input, output)
// Socket.ioモジュールの読み込み
const { Server } = require('socket.io');
// Socket.ioを作成
const io = new Server(server);

// connection event
io.on('connection', (socket) => { // (socket): 接続したユーザの情報が入る
    console.log('connected!!!');
    console.log('SocketID: ${socket.id}');

    //chatメッセージの受信
    socket.on('chat_message', (data) => { // イベント'chat_message'が発生したら実行(コールバック)
        // console.log(socket.id);
        console.log(data);
        //送信ユーザのSocketIDを追加
        data.socketID = socket.id;
        //接続している(すべての)ユーザにメッセージを(一斉に)送信
        io.emit('chat_message', data);
    })
})

// HTTPサーバー待機
server.listen(port, host, ()=> {
    console.log('Server Listen...');
    console.log(`listening on http://${host}:${port}`);
})