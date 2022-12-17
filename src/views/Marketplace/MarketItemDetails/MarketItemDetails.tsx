import { useParams } from 'react-router-dom';

import styles from '@/styles';
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
      <div className='font-satoshi font-medium px-3 mb-64'>
        <div className='text-2xl mb-8'>More from this collection</div>

        <MarketItemFeat />
      </div>

      {/* explore all button
       */}
      <div className='hidden lg:block'>
        <button>Explore all</button>
      </div>
    </div>
  );
};

export default MarketItemDetails;
