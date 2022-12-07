import styles from '@/styles';

const HomePage = () => {
  return (
    <div className={styles.xPadding}>
      {/* Hero section */}

      <section aria-label='hero section on Home page' className='text-center'>
        <div className='px-2'>
          <h1 className='font-clash_display font-medium text-[32px] text-dark_gray_clr-200'>
            Photography is poetry and beautiful untold stories
          </h1>

          <p className='font-satoshi font-medium mt-10 text-dark_gray_clr-300'>
            Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to
            get top access.
          </p>
        </div>

        <div className='h-[355px] bg-black mt-6 mb-28'>images</div>
      </section>

      {/* Featured Products Section */}

      <section aria-label='a list of featured products and their related information'>
        <h1 className='font-satoshi font-bold text-[28px] mb-6 text-dark_gray_clr-300'>
          Featured products
        </h1>

        <div>
          <div
            aria-label='click to see detailed view of this product on the product page'
            className='relative'
          >
            <div className='h-[255px] bg-indigo-400'></div>
            <div
              className='absolute inset-0 z-30 bg-opacity-40 bg-black text-center'
              aria-hidden
            >
              <h1 className='font-clash_display font-semibold text-3xl text-white mt-11'>
                Boolean Egyptian
              </h1>
            </div>
          </div>

          <p className='font-satoshi text-[15px] text-light_gray_clr-700 text-left my-3 w-11/12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>

          <div className='flex items-center gap-4 border-b border-b-black w-fit pr-3 pb-2 mb-8'>
            avatars
            <h3 className='font-satoshi font-medium'>64 major creators</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
