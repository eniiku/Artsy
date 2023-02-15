import ProductCard from '../components/ProductCard';

interface MarketCartProps {
  goToShipping: () => void;
}

const MarketCart = (props: MarketCartProps) => {
  const { goToShipping } = props;

  return (
    <div className='font-satoshi text-lg relative'>
      {/* Cart Controls */}
      <div className='lg:hidden bg-[#3A3A3A] my-10 py-2 px-10 flex items-center justify-center gap-14 w-fit mx-auto rounded-full font-medium'>
        <button className='bg-white py-1 px-10 rounded-full'>Shop</button>
        <button className='text-white'>Scheduled</button>
      </div>

      {/* Cart List */}
      <ul className='my-24 lg:mb-0'>
        {[1, 2, 3, 4, 5].map((product) => (
          <li key={product} className='my-14'>
            <ProductCard />
          </li>
        ))}
      </ul>

      {/* Cart Details */}
      <div
        className='fixed lg:static bg-white bottom-0 left-0 right-0 px-5 pb-10 pt-5 z-40 shadow-2xl shadow-black 
        lg:shadow-none lg:pb-20 lg:px-0 lg:pt-14 lg:border-t-[0.3px] lg:border-[#747474] lg:grid grid-cols-2'
      >
        <ul className='text-xl text-[#888888] lg:order-2 lg:w-full'>
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

        <div className='flex flex-col justify-center items-center text-lg gap-4 lg:order-1 lg:gap-12 lg:justify-self-start'>
          <button
            className='bg-blue_clr-700 font-medium text-white py-3 px-16 w-fit lg:text-[32px] lg:py-8 lg:px-32'
            onClick={goToShipping}
          >
            Proceed to checkout
          </button>
          <button className='text-[#006CA2] underline underline-offset-4 lg:text-[28px]'>
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketCart;
