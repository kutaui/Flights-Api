import express from 'express';
import flights from './flights.json'
import cors from "cors";

const app = express()
app.use(express.json());

const corsOptions = {
    origin: "*",
    methods:"GET",
    allowHeaders: "Content-Type"
}

app.use(cors(corsOptions))

app.get('/flights', (req, res) => {
    res.json(flights.data);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})