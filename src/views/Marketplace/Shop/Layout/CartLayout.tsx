import * as React from 'react';

import MarketCart from '../MarketCart/MarketCart';
import MarketPayment from '../MarketPayment/MarketPayment';
import MarketShipping from '../MarketShipping/MarketShipping';

const CartLayout = () => {
  const [currentPage, setCurrentPage] = React.useState({
    cart: true,
    shipping: false,
    payment: false,
  });

  const toggleCurrentPagetoCart = () =>
    setCurrentPage((currentPage) => ({
      ...currentPage,
      cart: true,
      shipping: false,
      payment: false,
    }));

  const toggleCurrentPagetoShipping = () =>
    setCurrentPage((currentPage) => ({
      ...currentPage,
      shipping: true,
      payment: false,
      cart: false,
    }));

  const toggleCurrentPagetoPayment = () =>
    setCurrentPage((currentPage) => ({
      ...currentPage,
      payment: true,
      cart: false,
      shipping: false,
    }));

  return (
    <div>
      {/* Desktop Controls */}
      <div className='hidden lg:flex my-8 border-b-[0.5px] border-[#747474] w-fit items-center gap-16 mx-auto text-2xl text-[#888888] font-satoshi'>
        <button
          onClick={toggleCurrentPagetoCart}
          className={`py-2 first-letter:uppercase ${
            currentPage.cart
              ? 'text-dark_gray_clr-300 font-medium border-b-2 border-[#2F4333]'
              : ' '
          }`}
        >
          shopping cart
        </button>

        <button
          onClick={toggleCurrentPagetoShipping}
          className={`first-letter:uppercase py-2
            ${
              currentPage.shipping
                ? 'text-dark_gray_clr-300 font-medium border-b-2 border-[#2F4333]'
                : ' '
            }`}
        >
          shipping details
        </button>

        <button
          onClick={toggleCurrentPagetoPayment}
          className={`first-letter:uppercase py-2
            ${
              currentPage.payment
                ? 'text-dark_gray_clr-300 font-medium border-b-2 border-[#2F4333]'
                : ' '
            }`}
        >
          payment details
        </button>
      </div>

      {currentPage.cart ? (
        <MarketCart goToShipping={toggleCurrentPagetoShipping} />
      ) : null}

      {currentPage.shipping ? (
        <MarketShipping goToPayment={toggleCurrentPagetoPayment} />
      ) : null}

      {currentPage.payment ? <MarketPayment /> : null}
    </div>
  );
};

export default CartLayout;
