import likeIcon from '@/assets/icons/product/icon-like.svg';
import ProductCard from '@/views/Marketplace/Shop/components/ProductCard';

interface BidsCardProps {
  url: string | undefined;
  price: number;
  creator: string;
  date: {
    day: number;
    month: number;
    year: number;
  };
  bid: number;
  text: string;
}

const styles = {
  xPadding: 'px-5',
};

const BidsCard = (props: BidsCardProps) => {
  const { url, text, price, creator, date, bid } = props;

  return (
    <div>
      <div
        className={`bg-white rounded-2xl border border-slate-300 border-opacity-40 shadow-lg ${styles.xPadding} py-2`}
      >
        <div className='flex justify-end'>
          <div className='border border-black p-1 rounded-full w-fit lg:p-3'>
            <img
              src={likeIcon}
              role='presentation'
              className='w-5 lg:w-[33px]'
            />
          </div>
        </div>

        <img
          className='max-h-[185px] bg-yellow-400 rounded-lg my-2 lg:max-h-[280px] lg:my-4 lg:-mx-6 w-full'
          src={url}
          alt=' '
        />

        <div className='font-satoshi font-bold text-xl flex items-center justify-between lg:text-[40px] lg:my-6'>
          <h3 className='first-letter:uppercase'>{text}</h3>
          <h3 className='lg:hidden'>{`${price} ETH`}</h3>
        </div>
      </div>

      {/* Details of Item on Auction */}

      <ul
        className={`${styles.xPadding} px-6 font-satoshi text-xl text-dark_gray_clr-200 lg:text-[32px]`}
      >
        <li className='mt-[30px] lg:mt-[60px]'>
          Creator:{' '}
          <div className='inline-block first-letter:uppercase text-[#006CA2] font-bold lg:text-3xl'>
            {creator}
          </div>
        </li>

        <li className='mt-[30px] lg:mt-[60px]'>
          Date:{' '}
          <span className='font-bold lg:text-3xl'>{`${date.day}/${date.month}/${date.year}`}</span>
        </li>

        <li className='hidden lg:block mt-[30px] lg:my-[60px]'>
          Highest bid:{' '}
          <span className='font-bold lg:text-3xl'>{`${bid} ETH`}</span>
        </li>
      </ul>

      {/* Bid Card Controls */}

      <div
        className={`${styles.xPadding} px-6 py-3 mt-[30px] bg-[#F6F4F4] rounded-[10px] flex items-center
          justify-between font-satoshi lg:px-10 lg:py-6`}
      >
        <div className='flex flex-col justify-between font-bold gap-4 text-xl lg:text-3xl lg:gap-8'>
          <h3 className='text-light_gray_clr-700'>Current bid</h3>

          <h3 className='text-dark_gray_clr-200'>{price} ETH</h3>
        </div>

        <button
          className='font-medium text-white bg-blue_clr-700 px-12 py-3 rounded-sm lg:text-[25px]
          lg:px-20 lg:py-6'
        >
          Place bid
        </button>
      </div>
    </div>
  );
};

export default BidsCard;
