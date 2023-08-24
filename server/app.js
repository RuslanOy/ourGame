const express = require('express');

const app = express();

const PORT = 4000;

const indexRouter = require('./routes/index');
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Трунь трунь трунь на ${4000} порту`);
});
