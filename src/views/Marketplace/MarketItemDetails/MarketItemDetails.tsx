import { useParams } from 'react-router-dom';

import styles from '@/styles';
import chevronLeftIcon from '@/assets/icons/chevron/icon-chevron-left.svg';
import chevronRightIcon from '@/assets/icons/chevron/icon-chevron-right.svg';
import MarketItemCard from '../MarketItem/MarketItemCard';
import MarketItemFeat from '../MarketItem/MarketItemFeat';
import Breadcrumbs from '@/components/layout/navigation/Breadcrumbs/Breadcrumbs';
import ProductData from '@/data/products.json';

const MarketItemDetails = () => {
  const { id } = useParams();

  return (
    <div className={`${styles.xPadding}`}>
      <div className='mt-4 mb-3 lg:mb-16'>
        <Breadcrumbs />
      </div>

      {/* Product Details Card */}
      <MarketItemCard />

      {/* Explore more */}
      <div className='font-satoshi font-medium mb-64 lg:m-0 lg:o-0'>
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
          <ul className='flex gap-12'>
            {ProductData.products
              .sort(() => Math.random() - 0.5)
              .map((item) => (
                <li
                  key={item.id}
                  className='min-w-full min-h-[510px] lg:min-w-[530px] lg:min-h-[580px] flex-none'
                >
                  <MarketItemFeat
                    url={item.url}
                    text={item.name}
                    price={item.price.eth}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* explore all button */}
      <div className='hidden lg:block text-center'>
        <button className='module-border-wrap font-satoshi font-medium text-4xl my-16'>
          <div className='module'>
            <span className='gradient-text'>Explore all</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MarketItemDetails;
