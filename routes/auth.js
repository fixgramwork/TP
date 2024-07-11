const express = require('express');
const bcrypt = require('bcryptjs');

const authRoutes = (db) => {
    const router = express.Router();

    router.post('/register', (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send('모든 필드를 입력하세요.');
        }

        const hash = bcrypt.hashSync(password, 10);

        const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(query, [email, hash], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('서버 오류가 발생했습니다.');
            }
            res.status(201).send('사용자가 등록되었습니다.');
        });
    });

    router.post('/login', (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send('모든 필드를 입력하세요.');
        }

        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('서버 오류가 발생했습니다.');
            }

            if (results.length === 0) {
                return res.status(401).send("이메일 또는 비밀번호가 잘못되었습니다.");
            }

            const user = results[0];

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('서버 오류가 발생했습니다.');
                }

                if (isMatch) {
                    return res.status(200).send('로그인 성공.');
                } else {
                    return res.status(401).send('이메일 또는 비밀번호가 잘못되었습니다.');
                }
            });
        });
    });

    return router;
};

module.exports = authRoutes;
