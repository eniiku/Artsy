import { useParams } from 'react-router-dom';

import styles from '@/styles';
import ethIcon from '@/assets/icons/product/ethereum.svg';
import likeIcon from '@/assets/icons/product/icon-like.svg';
import chevronDownIcon from '@/assets/icons/chevron/icon-chevron-down-outlined.svg';
import MarketItem from '../MarketItem/MarketItem';
import MarketItemFeat from '../MarketItem/MarketItemFeat';

const MarketItemDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div className='mt-4 mb-3'>breadcrumbs</div>

      {/* Product Details */}

      <div className={`${styles.xPadding} font-satoshi font-medium`}>
        <div>
          <MarketItem />

          <div>
            <ul>
              <li className='mt-5 text-black'>
                Creator:{' '}
                <span className=' text-[#006CA2] capitalize'>Ali Dawa</span>
              </li>

              <li className='mt-5 text-light_gray_clr-700'>Made in Italy</li>

              <li className='mt-5 text-light_gray_clr-700'>
                Total views: 1.7k
              </li>

              <li className='flex items-center justify-start gap-6 text-3xl text-dark_gray_clr-200 my-6'>
                <button>-</button>

                <h3>1</h3>

                <button>+</button>
              </li>
            </ul>

            <div className='flex items-center gap-5'>
              <button className='px-16 py-4 bg-blue_clr-700 text-white rounded-[4px]'>
                Add to cart
              </button>

              <button className='border border-dark_gray_clr-600 p-4 rounded-[4px]'>
                <img src={likeIcon} role='presentation' />
              </button>
            </div>
          </div>
        </div>

        <div className='border-t-[0.5px] border-dark_gray_clr-200 mt-12 mb-20'>
          {['description', 'listings', 'status'].map((item) => (
            <div
              key={item}
              className='border-b-[0.5px] border-dark_gray_clr-200 flex items-center justify-between px-4 py-6 
              capitalize text-lg'
            >
              {item}
              <img src={chevronDownIcon} role='presentation' />
            </div>
          ))}
        </div>
      </div>

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
