import { useCart } from '@/context/CartContext';
import productData from '@/data/products.json';

const CartDetails = () => {
  const { cartItems } = useCart();

  const SHIPPING_FEE = 2.5;

  const total = cartItems.reduce((total, cartItem) => {
    const item = productData.products.find((i) => i.name === cartItem.id);

    return total + (item?.price.usd || 0) * cartItem.quantity;
  }, 0);

  return (
    <ul className='text-xl text-[#888888] lg:order-2 lg:w-full lg:text-[28px]'>
      <li className='cart-list'>
        Products in cart: <span>{cartItems.length} items</span>
      </li>
      <li className='cart-list'>
        Shipping: <span>${SHIPPING_FEE}</span>
      </li>
      <li className='cart-list'>
        Total <span>${total}</span>
      </li>
      <li className='cart-list py-5 border-t border-dashed border-light_gray_clr-700 lg:hidden'>
        Grand total: <span>${total + SHIPPING_FEE}</span>
      </li>
    </ul>
  );
};

export default CartDetails;
