import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './product-card.scss';
import { toast } from 'react-hot-toast';

/* eslint-disable-next-line */
export interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
}

export function ProductCard(props: ProductCardProps) {
  const navigate = useNavigate();

  const onDeleteProductClick = () => {
    axios
      .delete(`http://localhost:3333/product/${props.id}`)
      .then(() => navigate('/product'));
  };

  return (
    <Link
      className="bg-[#232225] text-white rounded-md"
      to={`/product/${props.id}`}
    >
      <img
        className="rounded-t-md bg-transparent w-full"
        src={props.image}
        alt=""
      />
      <div className="flex gap-10 p-2 justify-between items-end">
        <div>
          <h3 className="m-2 text-sm">Producto: {props.name}</h3>
          <p className="m-2 text-sm">Descipción: {props.description}</p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            onDeleteProductClick();
          }}
          className="m-2 rounded text-sm  px-3 py-1 h-fit bg-red-500"
        >
          Eliminar
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
