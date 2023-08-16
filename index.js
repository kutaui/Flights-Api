import express from 'express';


const app = express()
app.use(express.json());

app.get('/flights', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})