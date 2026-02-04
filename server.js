const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const booksFilePath = path.join(__dirname, 'books.json');
app.use(express.json());

const readBooks = () => {
  const data = fs.readFileSync(booksFilePath, 'utf-8');
  return JSON.parse(data);
};

const writeBooks = (books) => {
  fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
};

app.get('/books', (req, res) => {
  const books = readBooks();
  res.json(books);
});


app.get('/books/:id', (req, res) => {
  const books = readBooks();
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ message: 'Kitap bulunamadı' });
  }

  res.json(book);
});

app.post('/books', (req, res) => {
  const books = readBooks();
  const newbook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    ...req.body
  };
  books.push(newbook);
  writeBooks(books);
  res.status(201).json(newbook);
});

app.put('/books/:id', (req, res) => {
  const books = readBooks();
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Kitap bulunamadı' });
  } 
  books[bookIndex] = { ...books[bookIndex], ...req.body };
  writeBooks(books);
  res.json(books[bookIndex]);
});

app.delete('/books/:id', (req, res) => {
  const books = readBooks();
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Kitap bulunamadı' });
  }

  const newBooks = books.filter(b => b.id !== parseInt(req.params.id));

  writeBooks(newBooks);
  res.json({ message: 'Kitap silindi' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


