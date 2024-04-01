import React from 'react';

import { ProductsGrid, ProductsResponse, SimpleProduct, ProductCard } from '../../products';

const getProducts = async (limit = 200, offset = 0): Promise<SimpleProduct[]> => {
  const productResponse: ProductsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  const products = productResponse.results.map((product) => ({
    id: product.url.split('/').at(-2)!,
    name: product.name,
  }));

  return products;
};

export default async function ProductsPage() {
  const products = await getProducts(151);

  console.log(products);

  return (
    <div className="flex flex-col">
      {/* <ProductCard key={products.id} /> */}
      <ProductsGrid iproducts={products} />
    </div>
  );
}
