"use client";
import { useEffect, useState } from "react";
import { useFavorites } from "../../../context/FavoritesContext";
import FavoriteButton from "../../../components/FavoriteButton";

export default function ProductPage({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const { isFavorite } = useFavorites();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10">
      <img src={product.image} className="w-64 object-contain" />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-green-600 text-xl my-2">${product.price}</p>
        <p className="my-3">{product.description}</p>
        <FavoriteButton product={product} isFav={isFavorite(product.id)} />
      </div>
    </div>
  );
}
