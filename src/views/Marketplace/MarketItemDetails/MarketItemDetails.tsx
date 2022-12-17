import { useParams } from 'react-router-dom';

import styles from '@/styles';
import chevronLeftIcon from '@/assets/icons/chevron/icon-chevron-left.svg';
import chevronRightIcon from '@/assets/icons/chevron/icon-chevron-right.svg';
import MarketItemCard from '../MarketItem/MarketItemCard';
import MarketItemFeat from '../MarketItem/MarketItemFeat';

const MarketItemDetails = () => {
  const { id } = useParams();

  return (
    <div className={`${styles.xPadding}`}>
      <div className='mt-4 mb-3 lg:mb-16'>breadcrumbs</div>

      {/* Product Details Card */}
      <MarketItemCard />

      {/* Explore more */}
      <div className='font-satoshi font-medium px-3 mb-64 lg:m-0 lg:o-0'>
        <div className='lg:bg-white lg:shadow-2xl lg:my-28 lg:py-8 lg:px-6 lg:rounded-2xl'>
          <p className='text-2xl mb-8 lg:hidden'>More from this collection</p>

          <div className='hidden lg:flex lg:justify-between lg:items-center'>
            <p className='text-[32px]'>Explore more from this collection</p>

            <div className='flex gap-8'>
              <img src={chevronLeftIcon} role='presentation' />
              <img src={chevronRightIcon} role='presentation' />
            </div>
          </div>
        </div>

        <div className='overflow-hidden'>
          <ul className='lg:flex lg:gap-12'>
            {['', '', '', '', ''].map((item, index) => (
              <li key={index} className='w-[530px] flex-none'>
                <MarketItemFeat />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* explore all button
       */}
      <div className='hidden lg:block text-center'>
        <button className='linear-btn font-satoshi font-medium text-4xl my-16'>
          Explore all
        </button>
      </div>
    </div>
  );
};

export default MarketItemDetails;
