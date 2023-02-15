import ProductCard from './ProductCard';

const CartList = () => {
  return (
    <ul className='my-24 lg:mb-0'>
      {[1, 2, 3, 4, 5].map((product) => (
        <li key={product} className='my-14'>
          <ProductCard />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
