// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';
import Product from './product/product';
import Layout from './layout/layout';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
      <Route
        path="/product/*"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
