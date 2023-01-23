import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(process.cwd())));

app.get('/*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.listen(5173, () => {
    console.log('Server running on http://localhost:3000');
});