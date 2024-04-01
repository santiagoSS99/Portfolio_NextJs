import { ProductCard, SimpleProduct } from '..';

interface Props {
  iproducts: SimpleProduct[];
}

export const ProductsGrid = ({ iproducts }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {iproducts.map((products) => (
        <ProductCard key={products.id} product={products} />
      ))}
    </div>
  );
};
