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


