import { useParams } from 'react-router-dom';

import styles from '@/styles';
import ethIcon from '@/assets/icons/product/ethereum.svg';
import likeIcon from '@/assets/icons/product/icon-like.svg';
import arrowRightOutlinedIcon from '@/assets/icons/chevron/icon-arrow-right-outlined.svg';
import chevronDownIcon from '@/assets/icons/chevron/icon-chevron-down-outlined.svg';
import MarketItem from '../MarketItem/MarketItem';
import MarketItemFeat from '../MarketItem/MarketItemFeat';

const MarketItemDetails = () => {
  const { id } = useParams();

  return (
    <div className={`${styles.xPadding}`}>
      <div className='mt-4 mb-3 lg:mb-16'>breadcrumbs</div>

      {/* Product Details */}

      <div
        className='font-satoshi font-medium lg:border border-dark_gray_clr-200 lg:grid
        grid-cols-2'
      >
        {/* Product Image Section */}

        <div>
          {/* Image Mobile View */}

          <div className='lg:hidden'>
            <MarketItem />
          </div>

          {/* image Desktop view */}

          <div className='hidden lg:block py-8 px-4 border-r border-dark_gray_clr-200 h-full'>
            <div className='bg-indigo-300 w-full h-full'>image placeholder</div>
          </div>
        </div>

        {/* Product Info Section */}

        <div>
          <div
            className='hidden lg:flex text-dark_gray_clr border-b border-dark_gray_clr-200
            items-center justify-between px-8 py-10'
          >
            <h3 className='font-satoshi font-bold text-[46px]'>
              Boolean Egyptian
            </h3>

            <div className='flex gap-[10px] items-center'>
              <img src={ethIcon} role='presentation' className='h-[40px]' />
              <h3 className='font-stix font-medium text-[40px] text-center'>
                0.09
              </h3>
            </div>
          </div>

          <div className='lg:px-8 lg:py-12'>
            <ul>
              <li className='mt-5 text-black lg:text-3xl lg:mt-0'>
                Creator:{' '}
                <span className=' text-[#006CA2] capitalize'>Ali Dawa</span>
              </li>

              <li className='mt-5 text-light_gray_clr-700 lg:text-black lg:text-2xl lg:mt-8'>
                Made in Italy
              </li>

              <li className='mt-5 text-light_gray_clr-700 lg:text-black lg:text-[28px] lg:my-8'>
                Total views: 1.7k
              </li>
            </ul>

            {/* Cart Control Options */}
            <div>
              <div className='flex items-center justify-start gap-6 text-3xl text-dark_gray_clr-200 my-6 lg:text-4xl'>
                <button>-</button>

                <h3>1</h3>

                <button>+</button>
              </div>

              <div className='flex items-center gap-5'>
                <button
                  className='px-16 py-4 bg-blue_clr-700 text-white rounded-[4px] lg:text-[26px] lg:flex lg:items-center
                  lg:justify-center lg:gap-[10px]'
                >
                  Add to cart
                  <img
                    src={arrowRightOutlinedIcon}
                    role='presentation'
                    className='hidden lg:block w-6'
                  />
                </button>

                <button className='border border-dark_gray_clr-600 p-4 rounded-[4px]'>
                  <img src={likeIcon} role='presentation' className='lg:w-10' />
                </button>
              </div>
            </div>
          </div>

          <div className='border-t-[0.5px] border-dark_gray_clr-200 mt-12 mb-20 lg:m-0 lg:border-t-0'>
            {['description', 'listings', 'status'].map((item) => (
              <div
                key={item}
                className='border-b-[0.5px] border-dark_gray_clr-200 flex items-center justify-between px-4 py-6 
              capitalize text-lg lg:text-[32px] lg:px-6 lg:py-10 lg:border-b-0 lg:border-t'
              >
                {item}
                <img
                  src={chevronDownIcon}
                  role='presentation'
                  className='lg:w-[45px]'
                />
              </div>
            ))}
          </div>
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
