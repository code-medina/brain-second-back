//Modules
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Application } from 'express';

export const app: Application = express();

//cors
app.use(cors());

//middleware handler cookie data request
app.use(cookieParser());
//parser json bodies
app.use(express.json());
// Parse URL-encoded bodies (extended: true allows nested objects)
app.use(express.urlencoded({ extended: true }));

//routes health
app.use('/', (req, res) => {
  res.status(200).json({
    message: 'APP is live',
    date: new Date().toISOString(),
    version:"1.0.0",
    github:"https://github.com/code-medina/brain-second-back.git"
  });
});
