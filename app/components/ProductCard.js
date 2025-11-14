import Link from "next/link";
import { useFavorites } from "../context/FavoritesContext";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({ product }) {
  const { isFavorite } = useFavorites();

  return (
    <div className="border p-4 rounded flex flex-col items-center">
      <Link href={`/product/${product.id}`}>
        <img src={product.image} className="h-32 object-contain" />
        <p className="font-bold mt-2 text-center">{product.title}</p>
        <p className="text-green-600">${product.price}</p>
      </Link>
      <FavoriteButton product={product} isFav={isFavorite(product.id)} />
    </div>
  );
}
