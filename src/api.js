const express = require('express');
const errorMiddleware = require('./middlewares/error');
const blogPostRoute = require('./routes/blogPost');
const categoryRoute = require('./routes/category');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', blogPostRoute);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
