import 'dotenv/config';
import express from "express";

const app = express();
app.use(express.json());


app.get('/', async (req, res, next) => {
    res.status(200).send({"message": "Hi Welcome to AWS Cloud"});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})