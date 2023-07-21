import { Route, Routes } from 'react-router-dom';
import ProductList from './product-list/product-list';
import './product.scss';
import toast, { Toaster } from 'react-hot-toast';

import ProductForm from './product-form/product-form';

/* eslint-disable-next-line */
export interface ProductProps {}

export function Product(props: ProductProps) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create" element={<ProductForm />} />
        <Route path="/:id" element={<ProductForm />} />
      </Routes>
      <Toaster position="top-center" />
    </div>
  );
}

export default Product;
