import Button from '../components/Button';
import CartDetails from '../components/CartDetails';
import CartList from '../components/CartList';
import Form from '../components/Form';

interface MarketShippingProps {
  goToPayment: () => void;
  goToCart: () => void;
}

const MarketShipping = (props: MarketShippingProps) => {
  const { goToPayment, goToCart } = props;

  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-24 lg:my-20'>
      <div>
        <div className='-mt-8'>
          {/* negative margin to balance out margin from comp */}
          <Form />
        </div>

        {/* Button Controls */}
        <div className='flex flex-col items-center gap-8 mt-12 mb-16'>
          <Button buttonAction={goToPayment} type='primary'>
            Proceed to Payment
          </Button>

          <div className='lg:hidden'>
            <Button buttonAction={goToCart} type='secondary'>
              Go back to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className='hidden lg:block '>
        <div className='-mt-24'>
          {/* negative margin to balance out margin from comp */}
          <CartList />
        </div>

        <div className='border-t-[0.3px] border-[#747474] pt-4'>
          <CartDetails />
        </div>
      </div>
    </div>
  );
};

export default MarketShipping;
