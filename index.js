import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './src/routes/users.js';
import dbConnect from './src/config/db/index.js';

dbConnect();

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.send('Home');
});

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
