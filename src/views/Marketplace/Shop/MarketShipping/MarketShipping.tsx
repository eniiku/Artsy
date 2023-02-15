interface MarketShippingProps {
  goToPayment: () => void;
  goToCart: () => void;
}

const MarketShipping = (props: MarketShippingProps) => {
  const { goToPayment, goToCart } = props;

  return (
    <div>
      <button onClick={goToPayment}>Proceed to Payment</button>
      <button onClick={goToCart}>Go to Cart</button>
    </div>
  );
};

export default MarketShipping;
