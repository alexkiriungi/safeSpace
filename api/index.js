import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URL).then(
    () => {
        console.log('Database connection successful');
    }
).catch((error) => {
    console.log(error);
});

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
});