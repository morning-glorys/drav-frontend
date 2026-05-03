import React from "react";
import ProductCard from "@/components/ui/ProductCard";

interface Product {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
}

interface ProductListProps {
  title: string;
  products: Product[];
}

export default function ProductList({ title, products }: ProductListProps) {
  return (
    <section className="py-xl">
      <h2 className="font-h2 text-h2 text-on-surface mb-lg">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-xl">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            title={product.title}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
