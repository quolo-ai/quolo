import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Quolo!');
});

app.listen(port, () => {
  console.log(`Quolo app listening at http://localhost:${port}`);
});
