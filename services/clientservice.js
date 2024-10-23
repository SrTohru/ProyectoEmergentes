const express = require('express');
const mysql = require('mysql2'); 
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'joseeduardo',
    database: 'fotografia'
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos establecida.');
    }
});

app.get('/clientes', (req, res) => {
    const query = 'SELECT * FROM client';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Error al obtener los clientes');
        }
        res.json(results);
    });
});

app.get('/clientes/:name', (req, res) => {
    const name = req.params.name;
    const query = 'SELECT * FROM client WHERE name = ?';
    db.query(query, [name], (err, results) => {
        if (err) {
            return res.status(500).send('Error al obtener el cliente');
        }
        if (results.length === 0) {
            return res.status(404).send('Cliente no encontrado');
        }
        res.json(results[0]);
    });
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
