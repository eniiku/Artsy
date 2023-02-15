interface MarketShippingProps {
  goToPayment: () => void;
}

const MarketShipping = (props: MarketShippingProps) => {
  const { goToPayment } = props;

  return (
    <div>
      MarketShipping
      <button onClick={goToPayment}>Proceed to Payment</button>
    </div>
  );
};

export default MarketShipping;
