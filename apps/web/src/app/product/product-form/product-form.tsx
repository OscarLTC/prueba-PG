import { Link, useNavigate, useParams } from 'react-router-dom';
import './product-form.scss';
import { useForm } from 'react-hook-form';
import { error } from 'console';
import { useEffect, useState } from 'react';
import axios from 'axios';

/* eslint-disable-next-line */
export interface ProductFormProps {}

export function ProductForm(props: ProductFormProps) {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      image: '/src/assets/no-image.png',
    },
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onFileChange = async (event: any) => {
    const file = event.target.files[0];

    const base64: any = await convertToBase64(file);
    setValue('image', base64);
  };

  const onSubmit = (data: any) => {
    if (id) {
      axios
        .put(`http://localhost:3333/product/${id}`, data)
        .then(() => navigate('/product'));
    } else {
      axios
        .post('http://localhost:3333/product/', data)
        .then(() => navigate('/product'));
    }
  };

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3333/product/${id}`).then((res) => {
        setValue('description', res.data.description);
        setValue('name', res.data.name);
        setValue('image', res.data.image);
      });
    }
  }, []);

  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-2xl mb-10 text-center">
        {id ? 'Actualizar producto' : 'Crear producto'}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex items-center">
          <span className="w-40">Nombre:</span>
          <input
            {...register('name', {
              required: true,
            })}
            className={`bg-slate-300 p-1 rounded w-full ${
              errors.name ? 'outline-red-500' : ''
            }`}
            type="text"
          />
        </div>
        <div className="flex items-center">
          <span className="w-40">Description:</span>
          <input
            {...register('description', {
              required: true,
            })}
            className={`bg-slate-300 p-1 rounded w-full ${
              errors.description ? 'outline-red-500' : ''
            }`}
            type="text"
          />
        </div>
        <div className="flex items-center">
          <span className="w-40">Imagen:</span>
          <input
            className={`bg-slate-300 p-1 rounded w-full`}
            type="file"
            onChange={onFileChange}
          />
        </div>

        <h4>Previsualización</h4>
        <div className="w-full flex justify-center my-4">
          <img className="w-40" src={`${watch('image')}`} alt="" />
        </div>
        <div className="flex justify-around text-white">
          <Link to="/" className="p-2 bg-red-500 rounded">
            Regresar
          </Link>
          <button className="p-2 bg-green-500 rounded">
            {id ? 'Actualizar producto' : 'Crear producto'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
