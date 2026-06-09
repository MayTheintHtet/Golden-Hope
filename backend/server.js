import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const authRoutes = require('./routes/auth')  

dotenv.config();

const app = express();

app.use(express.json())                        
app.use('/api/auth', authRoutes)               


const User = require('./models/user')


// After your existing code, before app.listen:
User.sync()
  .then(() => console.log('User table ready'))
  .catch(err => console.error('Table sync failed:', err))