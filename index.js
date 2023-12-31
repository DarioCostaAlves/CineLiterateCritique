import express from 'express';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.get('/', (req,res) => {
    res.send("This is your Node.JS server");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.get('/books', (req, res) => {
    const books = [
      { id: 1, title: 'Book 1', author: 'Author 1' },
      { id: 2, title: 'Book 2', author: 'Author 2' },
      // Add more book objects as needed
    ];
    res.json(books);
});

app.get('/movies', (req, res) => {
    const movies = [
      { id: 1, title: 'Movie 1', director: 'Director 1' },
      { id: 2, title: 'Movie 2', director: 'Director 2' },
      // Add more movie objects as needed
    ];
    res.json(movies);
  });