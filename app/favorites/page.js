"use client";
import { useFavorites } from "../../context/FavoritesContext";
import ProductCard from "../../components/ProductCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return <p className="p-6">No favorites yet</p>;

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {favorites.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
