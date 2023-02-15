import Button from '../components/Button';
import CartDetails from '../components/CartDetails';
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
        <CartDetails />

        <div className='flex flex-col justify-center items-center text-lg gap-4 lg:order-1 lg:gap-12 lg:justify-self-start'>
          <Button buttonAction={goToShipping} type='primary'>
            Proceed to checkout
          </Button>

          <Button buttonAction={undefined} type='secondary'>
            Continue shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketCart;
