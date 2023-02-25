import { Link } from 'react-router-dom';

import styles from '@/styles';
import auctionData from '@/data/auction.json';
import LiveCard from '../components/LiveCard/LiveCard';
import BidsCard from '../components/BidsCard/BidsCard';
import arrowRightIcon from '@/assets/icons/chevron/icon-arrow-right.svg';
import Breadcrumbs from '@/components/layout/navigation/Breadcrumbs/Breadcrumbs';

const AuctionPage = () => {
  return (
    <div
      className={`font-satoshi font-medium text-xl text-dark_gray_clr-200 ${styles.xPadding} lg:text-[28px]`}
    >
      <div className='mt-6'>
        <Breadcrumbs />
      </div>

      {/* Live Auction */}

      <div className='my-10 lg:my-20'>
        <p className='lg:text-[28px] lg:mb-24'>
          Here’s an overview of products actively on auction, explore!
        </p>

        <ul className='flex gap-12 overflow-hidden my-12'>
          {auctionData.products.map((product) => (
            <li key={product.id}>
              <Link to={`live/${product.id}`}>
                <LiveCard url={product.url} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='my-10 lg:mb-40'>
        <h3 className='lg:font-bold lg:text-4xl lg:mb-16'>
          Top bids from popular creators
        </h3>

        <ul className='lg:grid lg:grid-cols-2 lg:gap-20'>
          {auctionData.bids.map((product) => (
            <li key={product.id} className='mt-6'>
              <BidsCard
                url={product.url}
                text={product.name}
                currentPrice={product.bid.current.eth}
                highestPrice={product.bid.highest.eth}
                creator={product.creator}
                date={product.date}
              />
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
