require("dotenv").config();

import express from 'express';
import serverless from 'serverless-http';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


export const handler = serverless(app);