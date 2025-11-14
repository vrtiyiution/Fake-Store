"use client";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoriteButton({ product, isFav }) {
  const { addFavorite, removeFavorite } = useFavorites();

  const toggle = () => {
    if (isFav) removeFavorite(product.id);
    else addFavorite(product);
  };

  return (
    <button
      onClick={toggle}
      className={`mt-2 px-3 py-1 rounded text-white ${
        isFav ? "bg-red-500" : "bg-blue-600"
      }`}
    >
      {isFav ? "★ Remove" : "☆ Add"}
    </button>
  );
}
