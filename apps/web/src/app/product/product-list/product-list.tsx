import { useEffect, useState } from 'react';
import './product-list.scss';
import axios from 'axios';
import { Product } from '../../models/product.model';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card';

/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3333/product/all')
      .then((res) => setProducts(res.data));
  }, [products]);
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h2 className="mb-10 text-2xl text-white">Lista de productos</h2>
        <Link
          className="h-fit p-2 rounded bg-green-500 text-white"
          to="/product/create"
        >
          Crear Producto
        </Link>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products ? (
          products.map((product: Product) => (
            <ProductCard
              description={product.description}
              id={product.id}
              image={product.image}
              name={product.name}
              key={product.id}
            />
          ))
        ) : (
          <div className="text-white w-full">Cargando productos ...</div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
