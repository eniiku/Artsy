import styles from '@/styles';
import arrowRightIcon from '@/assets/icons/chevron/icon-arrow-right.svg';

const AuctionPage = () => {
  return (
    <div
      className={`font-satoshi font-medium text-xl text-dark_gray_clr-200 ${styles.xPadding}`}
    >
      <div className='mt-6'>breadcrumbs</div>

      {/* Live Auction */}

      <div className='my-10'>
        <p>Here’s an overview of products actively on auction, explore!</p>

        <ul className='flex gap-12 overflow-hidden'>
          {['', '', '', '', '', '', '', ''].map((item, index) => (
            <li key={index}>LiveCard</li>
          ))}
        </ul>
      </div>

      <div className='my-10'>
        <h3>Top bids from popular creators </h3>

        <ul className='flex gap-12 overflow-hidden'>
          {['', '', '', '', '', '', '', ''].map((item, index) => (
            <li key={index}>BidsCard</li>
          ))}
        </ul>
      </div>

      <div className='grid place-content-center'>
        <button className='font-normal flex items-center gap-3'>
          Load more
          <img src={arrowRightIcon} role='presentation' className='w-[54px]' />
        </button>
      </div>
    </div>
  );
};

export default AuctionPage;
