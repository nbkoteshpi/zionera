// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// Connect to SQLite database
const db = new sqlite3.Database(':memory:'); // Use an in-memory database for testing, or replace with a file like './mydb.sqlite'

db.serialize(() => {
  db.run("CREATE TABLE users (id INT, name TEXT)");

  const stmt = db.prepare("INSERT INTO users VALUES (?, ?)");
  stmt.run(1, "John Swamy");
  stmt.run(2, "Jane Smith");
  stmt.finalize();
});


db.serialize(() => {
  db.run("CREATE TABLE Branches (brn_Id INT, brn_Name TEXT)");

  const stmt = db.prepare("INSERT INTO Branches VALUES (?, ?)");
  stmt.run(1, "Vijayawada");
  stmt.run(2, "Hyderabad");
  stmt.finalize();
});
app.get('/api/users', (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      res.status(400).send("Error fetching data");
      return;
    }
    res.json(rows);
  });
});

app.get('/api/branches', (req, res) => {
  db.all("SELECT * FROM Branches", [], (err, rows) => {
    if (err) {
      res.status(400).send("Error fetching data");
      return;
    }
    res.json(rows);
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
