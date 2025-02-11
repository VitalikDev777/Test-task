import { FC } from "react";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p className="mt-2 text-lg text-gray-600">{product.price}</p>
    </div>
  );
};

export default ProductCard;
