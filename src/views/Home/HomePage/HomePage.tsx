import styles from '@/styles';
import chevronLeftIcon from '@/assets/icons/chevron/icon-chevron-left-outlined.svg';
import chevronRightIcon from '@/assets/icons/chevron/icon-chevron-right-outlined.svg';
import { Link, Footer } from '@/components/layout';

const HomePage = () => {
  return (
    <div className={`${styles.xPadding} max-w-[2000px] mx-auto`}>
      {/* Hero section */}

      <section aria-label='hero section on Home page' className='text-center'>
        <div className='px-2 lg:w-11/12 lg:mx-auto'>
          <h1
            className='font-clash_display font-medium text-[32px] text-dark_gray_clr-200
            lg:font-semibold lg:text-[80px]'
          >
            Photography is poetry & beautiful untold stories
          </h1>

          <p
            className='font-satoshi font-medium mt-10 text-dark_gray_clr-300 lg:text-[28px]
            lg:w-11/12 lg:mx-auto'
          >
            Flip through more than 10,000 vintage shots, old photograghs,
            historic images and captures seamlessly in one place. Register to
            get top access.
          </p>
        </div>

        <div className='h-[355px] bg-black mt-6 mb-28 lg:mt-32 lg:mb-36'>
          images
        </div>
      </section>

      {/* Featured Products Section */}

      <section aria-label='a list of featured products and their related information'>
        <h1
          className='font-satoshi font-bold text-[28px] mb-6 text-dark_gray_clr-300
          lg:font-medium lg:text-[48px]'
        >
          Featured products
        </h1>

        <div className='lg:grid lg:grid-cols-2 gap-8 lg:border-y-[0.5px] lg:border-dark_gray_clr-200 lg:py-16'>
          <div
            aria-label='click to see detailed view of this product on the product page'
            className='relative'
          >
            <div className='h-[255px] lg:h-full bg-indigo-400'></div>

            <div
              className='absolute inset-0 z-30 bg-opacity-40 bg-black text-center'
              aria-hidden
            >
              <h1
                className='font-clash_display font-semibold text-3xl text-white mt-11
                lg:hidden'
              >
                Boolean Egyptian
              </h1>

              <div className='flex items-center justify-center h-full'>
                <h1 className='font-clash_display text-3xl text-white hidden lg:block'>
                  View product
                </h1>
              </div>
            </div>
          </div>

          <div className='lg:text-left lg:flex lg:flex-col lg:justify-between'>
            <h1 className='hidden lg:block font-stix text-[40px] text-dark_gray_clr-200'>
              The Boolean Egytian
            </h1>

            <p
              className='font-satoshi text-[15px] text-light_gray_clr-700 text-left my-3 w-11/12
              lg:text-2xl lg:text-dark_gray_clr-200'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>

            <div
              className='flex items-center gap-4 border-b border-b-black w-fit pr-3 pb-2 mb-8
            lg:border-0  lg:mb-0 lg:p-0'
            >
              avatars
              <h3 className='font-satoshi font-medium lg:text-2xl'>
                64 major creators
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Auction section */}

      <section
        aria-label='showcase of featured auction event'
        className='-mx-3 my-24 bg-gradient-to-r from-[#466BED] via-[#79C2D2] to-[#c0550957] p-10 text-white overflow-hidden
          lg:-mx-24 lg:h-[780px] lg:px-20 lg:flex lg:flex-col lg:justify-evenly lg:gap-4'
      >
        <h1 className='hidden lg:block font-satoshi font-medium text-[40px] relative pb-8 w-fit'>
          See Upcoming Auctions and Exhibitions
          {/* TODO: update arrow icon design */}
          {/* arrow icon  */}
          <span
            aria-hidden
            className='w-11/12 absolute bottom-3 left-6 bg-white z-30 h-[1px]'
          ></span>
        </h1>

        {/* TODO: update background image for section*/}

        <div className='lg:flex lg:items-end lg:flex-1 lg:border lg:border-black bg-blend-overlay bg-black bg-opacity-50'>
          <div className='lg:w-full lg:px-10 lg:pb-12 lg:flex lg:justify-between lg:items-end'>
            <div className='lg:flex lg:items-center lg:gap-4 lg:w-3/5'>
              <div className='hidden lg:block font-bellefair text-[67px] text-[#E1E1E1] text-opacity-30'>
                01
              </div>

              <div>
                <div className='flex items-center gap-8 pr-8 lg:relative'>
                  <div
                    className='w-[16px] h-[16px] bg-white rounded-full lg:absolute lg:top-1 lg:-left-8'
                    aria-hidden
                  ></div>

                  <h3 className='font-bellefair text-xl lg:text[26px] lg:w-[22ch] lg:text-left'>
                    MONALISA REDEFINED IN STYLE.
                  </h3>
                </div>

                <div className='flex items-start gap-2 mt-4'>
                  <div className=' font-bellefair text-[40px] lg:text-[67px] lg:hidden'>
                    01
                  </div>

                  <div>
                    <p className='font-poppins text-xs uppercase lg:text-[13px]'>
                      Start on : 08:00 GTS . Monday
                    </p>

                    <p className='font-satoshi font-medium text-[10px] my-4 lg:text-base'>
                      GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                      INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                      HIGHEST AND LOWEST BIDS.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls(slider & buttons) */}

            <div className='flex items-center justify-end gap-8'>
              <button className='font-satoshi text-sm underline underline-offset-2 lg:text-2xl lg:underline-offset-8'>
                See more
              </button>

              <button className='font-satoshi text-sm border px-2 py-2 rounded-[10px] lg:text-2xl lg:px-3 lg:py-3'>
                Set a reminder
              </button>
            </div>
          </div>
        </div>

        {/* TODO: 
        - create logic for slider 
        -create slider to integrate with controls */}

        <div className='hidden lg:flex items-center justify-between mt-4'>
          <div>slider</div>

          <div>
            <button
              className='w-[70px] h-[70px] rounded-full text-center bg-white bg-opacity-20 backdrop-blur-lg
                shadow-xl mr-6'
            >
              <img
                src={chevronLeftIcon}
                role='presentation'
                className='m-auto'
              />
            </button>

            <button
              className='w-[70px] h-[70px] rounded-full text-center bg-white bg-opacity-20 backdrop-blur-lg
                shadow-xl'
            >
              <img
                src={chevronRightIcon}
                role='presentation'
                className='m-auto'
              />
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}

      <section
        aria-label='navigation links to specific locations on website'
        className='-mx-3 overflow-hidden border-t border-t-black mb-16
        lg:-mx-24 lg:border-t-dark_gray_clr-200 lg:my-36 lg:border-t-0'
      >
        <Link url='/marketplace'>Explore marketplace</Link>

        <Link url='/auctions'>See auctions</Link>
      </section>

      {/* Top Creators section  */}

      <section
        aria-label='showcase of the best creators for the week'
        className='bg-light_gray_clr-300 -mx-3 relative h-[250px] overflow-hidden lg:-mx-24
          lg:h-[922px] lg:p-20 lg:overflow-visible'
      >
        <div className='flex items-start justify-between'>
          <h1
            className='font-clash_display font-semibold text-2xl uppercase p-3 text-left lg:text-[55px]
            lg:w-[50%] lg:p-0 lg:leading-[155.5%]'
          >
            top creators of the week
          </h1>

          <div className=' block lg:flex lg:items-center lg:gap-8 h-full'>
            <div className='min-h-full w-[10px] bg-light_gray_clr-500 hidden lg:block relative rounded-[50px]'>
              <div className='h-1/4 absolute bottom-0 bg-dark_gray_clr-300'></div>
            </div>

            <ul
              className='flex font-clash_display text-[10px] capitalize -mr-8 gap-4 lg:mr-0 lg:flex-col
              lg:text-[40px]'
            >
              <li className='list-disc lg:list-none'>editorals</li>

              <li className='list-disc lg:list-none'>fashion</li>

              <li className='list-disc lg:list-none'>lifestyle</li>

              <li className='hidden lg:block lg:list-none'>blueprint</li>
            </ul>
          </div>
        </div>

        <div
          className='font-clash_display font-extralight text-[13px] text-opacity-50 text-center
          lg:text-[32px] lg:my-8 lg:text-left'
        >
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </div>

        <div
          className='font-clash_display font-bold absolute z-10 text-right -bottom-4 right-0
        lg:right-20 lg:bottom-20'
        >
          <p className='text-[32px] uppercase text-dark_gray_clr-200 lg:text-5xl lg:text-center'>
            circa
          </p>

          <p className='text-[60px] line-through text-dark_gray_clr-700 lg:text-[170px]'>
            1985
          </p>
        </div>

        <div className='absolute z-30 bottom-0 left-[40%] w-[40px] h-[150px] bg-black lg:left-[50%] lg:-bottom-12'></div>
      </section>

      {/* Footer Section */}

      <Footer />
    </div>
  );
};

export default HomePage;
