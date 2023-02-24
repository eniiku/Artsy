import { formatCurrency } from '@/utilities/formatCurrency';

interface MarketItemProps {
  url: string;
  name: string;
  price: number;
}

const MarketItem = (props: MarketItemProps) => {
  const { url, name, price } = props;

  return (
    <>
      {/* mobile view */}
      <div className='lg:hidden'>
        <div className='bg-indigo-300'>
          <img
            src={url}
            alt='h-[380px] object-cover object-center rounded-lg'
          />
        </div>
        <div
          className='font-satoshi font-medium uppercase flex justify-between items-center mt-2
          text-dark_gray_clr-200'
        >
          <h3>{name}</h3>
          <h3>{formatCurrency(price)}</h3>
        </div>
      </div>

      {/* desktop view */}

      <div className='bg-white rounded-2xl shadow-2xl w-fit p-4 hidden lg:block'>
        <div className='max-w-[240px] max-h-[280px] bg-indigo-300 rounded-lg'>
          <img
            src={url}
            className='w-[240px] h-[280px] object-cover object-center rounded-lg'
          />
        </div>

        <div className='font-satoshi text-dark_gray_clr-200'>
          <h3 className='uppercase font-[22px] mt-2'>{name}</h3>

          <h3 className='font-bold text-[28px] mt-4'>
            {formatCurrency(price)}
          </h3>
        </div>
      </div>
    </>
  );
};

export default MarketItem;
