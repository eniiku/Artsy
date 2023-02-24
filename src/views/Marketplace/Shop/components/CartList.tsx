import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';

const CartList = () => {
  const { cartItems } = useCart();

  return (
    <ul className='my-24 lg:mb-0'>
      {cartItems.map((product) => (
        <li key={product.id} className='my-14'>
          <CartItem id={product.id} quantity={product.quantity} />
        </li>
      ))}
    </ul>
  );
};

export default CartList;
