require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const authRoutes = require('./routes/authRoutes');

const mysql = require('mysql');
const conn = {
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '',
    database : 'TP'
};

var connection = mysql.createConnection(conn);
connection.connect();

var testQuery = "INSERT INTO `members` (`username`,`password`) VALUES ('test','test')'";
 

// 데이터베이스 연결
db.connect((err) => {
    if (err) {
        console.error('데이터베이스 연결 오류:', err);
        process.exit(1);
    } else {
        console.log('데이터베이스에 연결되었습니다.');
    }
});

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 인증 라우트 사용
app.use('/authRoutes', authRoutes(db));

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});

