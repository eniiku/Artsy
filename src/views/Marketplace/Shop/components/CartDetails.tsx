const CartDetails = () => {
  return (
    <ul className='text-xl text-[#888888] lg:order-2 lg:w-full lg:text-[28px]'>
      <li className='cart-list'>
        Products in cart: <span>4 items</span>
      </li>
      <li className='cart-list'>
        Shipping: <span>$2.50</span>
      </li>
      <li className='cart-list'>
        Total <span>$114.00</span>
      </li>
      <li className='cart-list py-5 border-t border-dashed border-light_gray_clr-700 lg:hidden'>
        Grand total: <span>$116.50</span>
      </li>
    </ul>
  );
};

export default CartDetails;
