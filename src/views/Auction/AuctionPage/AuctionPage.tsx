import styles from '@/styles';
import LiveCard from '../components/LiveCard/LiveCard';
import BidsCard from '../components/BidsCard/BidsCard';
import arrowRightIcon from '@/assets/icons/chevron/icon-arrow-right.svg';

const AuctionPage = () => {
  return (
    <div
      className={`font-satoshi font-medium text-xl text-dark_gray_clr-200 ${styles.xPadding} lg:text-[28px]`}
    >
      <div className='mt-6'>breadcrumbs</div>

      {/* Live Auction */}

      <div className='my-10 lg:my-20'>
        <p className='lg:text-[28px] lg:mb-24'>
          Here’s an overview of products actively on auction, explore!
        </p>

        <ul className='flex gap-12 overflow-hidden my-12'>
          {['', '', '', '', '', '', '', ''].map((item, index) => (
            <li key={index}>
              <LiveCard />
            </li>
          ))}
        </ul>
      </div>

      <div className='my-10 lg:mb-40'>
        <h3 className='lg:font-bold lg:text-4xl lg:mb-24'>
          Top bids from popular creators
        </h3>

        <ul className='lg:grid lg:grid-cols-2 lg:gap-20'>
          {['', '', '', '', '', '', '', ''].slice(0, 3).map((item, index) => (
            <li key={index} className='mt-6'>
              <BidsCard />
            </li>
          ))}
        </ul>
      </div>

      <div className='grid place-content-center lg:hidden'>
        <button className='font-normal flex items-center gap-3 mb-6'>
          Load more
          <img src={arrowRightIcon} role='presentation' className='w-[54px]' />
        </button>
      </div>
    </div>
  );
};

export default AuctionPage;
