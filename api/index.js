import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

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

app.use("/api/user", userRoutes);