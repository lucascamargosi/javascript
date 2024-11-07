// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database(':memory:');

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

db.serialize(() => {
    db.run("CREATE TABLE diary (date TEXT, entry TEXT)");
});

app.post('/save-diary', (req, res) => {
    const { date, entry } = req.body;
    db.run("INSERT INTO diary (date, entry) VALUES (?, ?)", [date, entry], (err) => {
        if (err) {
            return res.status(500).send("Erro ao salvar entrada");
        }
        res.send("Entrada salva com sucesso");
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


// server.js
app.get('/get-diary', (req, res) => {
    db.all("SELECT date, entry FROM diary", [], (err, rows) => {
        if (err) {
            return res.status(500).send("Erro ao recuperar entradas");
        }
        res.json(rows);
    });
});
