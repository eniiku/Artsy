import styles from '@/styles';
import { Footer } from '@/components/layout';
import MarketItem from '../MarketItem/MarketItem';
import chevronDown from '@/assets/icons/chevron/icon-chevron-down-outlined.svg';
import arrowRight from '@/assets/icons/chevron/icon-arrow-right.svg';

const MarketPage = () => {
  return (
    <div>
      <div className='mx-2'>
        <div className='my-6'>breadcrumbs</div>

        <h3 className='font-poppins italic text-light_gray_clr-100 mb-4'>
          Showing 1-5 of 18 results
        </h3>

        <div
          className='flex justify-between bg-white py-4 px-6 rounded-2xl shadow-xl
          border border-[#eee] border-opacity-30'
        >
          {['Filters', 'Sort by'].map((item) => (
            <div
              key={item}
              className='flex gap-2 items-center font-satoshi text-[18px]'
            >
              {item}
              <img src={chevronDown} role='presentation' className='w-[34px]' />
            </div>
          ))}
        </div>
      </div>

      {/* Products Overview */}
      <div className={`mt-8 ${styles.xPadding}`}>
        <div>
          {['', '', '', '', '', '', '', '', '', '']
            .slice(0, 5)
            .map((product, index) => (
              <div key={index}>{<MarketItem />}</div>
            ))}
        </div>

        <div>
          <button className='font-satoshi font-[20px] float-right'>
            Load more
            <img
              src={arrowRight}
              role='presentation'
              className='w-[53px] inline ml-[10px]'
            />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MarketPage;
