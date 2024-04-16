import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import style from './ProductPage.module.css';
import Product from '../Products/types/Product';

export default function ProductPage(): JSX.Element {
    const {productId} = useParams();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    async function fetchProduct(): Promise<void> {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const obj = await res.json();
        setProduct(obj);
    }
    useEffect(() => {
        fetchProduct();
    },[productId]);
  return (
    <div>
        <h1 className={style.productTitle}>ProductPage</h1>
        <p className={style.bigProduct}>{product?.title}</p>
        <p className={style.bigProduct}>{product?.description}</p>
        <p className={style.bigProduct}>{`${product?.price} $`}</p>
        <img className={style.bigProductImg} src={product?.image} alt="" />
        <Link className={style.backMenu} to="../products">к списку товаров</Link>
    </div>
  )
}
