import styles from '@/styles';
import { Footer } from '@/components/layout';
import MarketItem from '../MarketItem/MarketItem';
import filterIcon from '@/assets/icons/product/icon-filter.svg';
import searchIcon from '@/assets/icons/navigation/icon-search.svg';
import arrowRightIcon from '@/assets/icons/chevron/icon-arrow-right.svg';
import chevronDownIcon from '@/assets/icons/chevron/icon-chevron-down-outlined.svg';

const MarketPage = () => {
  return (
    <div>
      <div className='mx-2'>
        <div className='my-6'>breadcrumbs</div>

        {/* Mobile sorting controls */}
        <div className='lg:hidden'>
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
                <img
                  src={chevronDownIcon}
                  role='presentation'
                  className='w-[34px]'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop search and sort controls */}
        <div
          className={`hidden lg:grid products-grid items-center font-satoshi text-2xl ${styles.xPadding}`}
        >
          <form className='w-full'>
            <div className='w-[90%] relative px-6 py-3 flex items-center rounded-2xl bg-light_gray_clr-200'>
              <label htmlFor='search' className='flex items-center gap-2'>
                <img src={searchIcon} aria-hidden />
              </label>
              <input
                type='search'
                name='search'
                placeholder='Search'
                className='w-full bg-light_gray_clr-200'
              />
            </div>
          </form>

          <div
            className='flex items-center justify-between bg-white py-4 px-6 rounded-2xl shadow-xl
          border border-[#eee] border-opacity-30 flex-1'
          >
            <p>Showing 1-5 of 18 results</p>

            <button
              className='flex gap-2 items-center justify-center border border-black rounded-lg
              px-10 py-3'
            >
              <p>Sort by</p>
              <img
                src={chevronDownIcon}
                role='presentation'
                className='w-[34px] mt-1'
              />
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.xPadding} products-grid items-start lg:mt-16`}>
        {/* Preferences controls/section */}

        <div className='font-satoshi hidden lg:block'>
          {/* Filter */}
          <h1 className='font-medium text-[32px] flex items-center gap-2'>
            <img src={filterIcon} aria-hidden className='w-[55px]' />
            Filter
          </h1>

          <div
            className='h-[6px] bg-light_gray_clr-400 rounded-lg mt-2'
            aria-hidden
          ></div>

          <div>
            <div className='font-medium text-[28px] flex items-center justify-between'>
              By category
              <img src={chevronDownIcon} aria-hidden />
            </div>

            <div>checkboxes</div>
          </div>

          {/* by price */}

          <div>
            <div className='font-medium text-[28px] flex items-center justify-between'>
              By price
              <img src={chevronDownIcon} aria-hidden />
            </div>

            <div>
              <div>price</div>

              <div>slider</div>
            </div>
          </div>

          {/* by artist */}
          <div>
            <div className='font-medium text-[28px] flex items-center justify-between'>
              By artist
              <img src={chevronDownIcon} aria-hidden />
            </div>

            <div>some text</div>
          </div>
        </div>

        {/* Products Overview */}
        <div className='mt-8 lg:mt-0'>
          <div className='mb-10 products-grid-items'>
            {['', '', '', '', '', '', '', '', '', '']
              .slice(0, 5)
              .map((product, index) => (
                <div key={index} className='mt-12 lg:mt-0 w-fit'>
                  {<MarketItem />}
                </div>
              ))}
          </div>

          <div className='lg:hidden'>
            <button className='font-satoshi font-[20px] float-right'>
              Load more
              <img
                src={arrowRightIcon}
                role='presentation'
                className='w-[53px] inline ml-[10px]'
              />
            </button>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className='lg:hidden'>
        <Footer />
      </div>
    </div>
  );
};

export default MarketPage;
