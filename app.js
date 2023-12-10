const express = require('express');
const cors = require('cors');
const connectDB = require('./routes/utils/db')
const routes = require('./routes/api');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

async function startServer() {
    await connectDB();
    routes(app);

    app.listen(port, () => {
        console.log(`Le serveur est en écoute sur le port ${port}`);
    });
}

startServer();
