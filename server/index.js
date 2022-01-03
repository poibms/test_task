require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router');
const errorMiddlewares = require('./middlewares/error-midleware')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); // для работы с cookie
app.use(cors());
app.use('/api', router);
app.use(errorMiddlewares)

const start = async () => {
  try {
    await mongoose.connect(process.env.connectUrl,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}
start();