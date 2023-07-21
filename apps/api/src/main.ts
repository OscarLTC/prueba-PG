import express from 'express';
import cors from 'cors';
import { Firebase } from './app/config/Firebase';
import { productRouter } from './app/routers/product.route';

const app = express();

const firebase = new Firebase().initialize();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/product', productRouter);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
