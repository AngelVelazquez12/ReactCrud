const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.get('/api/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  const sql = 'INSERT INTO users SET ?';
  db.query(sql, newUser, (err) => {
    if (err) throw err;
    res.send('User added');
  });
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  const sql = 'UPDATE users SET ? WHERE id = ?';
  db.query(sql, [updatedUser, id], (err) => {
    if (err) throw err;
    res.send('User updated');
  });
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, id, (err) => {
    if (err) throw err;
    res.send('User deleted');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
