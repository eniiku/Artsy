import Button from '../components/Button';

interface MarketShippingProps {
  goToPayment: () => void;
  goToCart: () => void;
}

const MarketShipping = (props: MarketShippingProps) => {
  const { goToPayment, goToCart } = props;

  return (
    <div>
      <div>{/* Form */}</div>

      {/* Button Controls */}
      <div className='flex flex-col items-center gap-8 mt-8 mb-16'>
        <Button buttonAction={goToPayment} type='primary'>
          Proceed to Payment
        </Button>

        <Button buttonAction={goToCart} type='secondary'>
          Go back to Cart
        </Button>
      </div>
    </div>
  );
};

export default MarketShipping;
