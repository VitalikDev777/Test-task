"use client";
import { useRouter, useParams } from 'next/navigation'
import { products } from "../../localData/products";

const ProductDetail = () => {
  const router = useRouter();
  console.log(router)
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="mt-4 text-xl">{product.description}</p>
      <p className="mt-4 text-2xl font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
