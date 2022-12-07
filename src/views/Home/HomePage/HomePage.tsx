import styles from '@/styles';
import { Link } from '@/components/layout';

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

      {/* Auction section */}

      <section
        aria-label='showcase of featured auction event'
        className='-mx-3 my-24 bg-gradient-to-r from-[#466BED] via-[#79C2D2] to-[#c0550957] p-10 text-white overflow-hidden'
      >
        <div className='border border-black p-1 py-6 px-2'>
          <div className='flex items-center gap-8 pr-8'>
            <div
              className='w-[16px] h-[16px] bg-white rounded-full'
              aria-hidden
            ></div>

            <h3 className='font-bellefair text-xl'>
              MONALISA REDEFINED IN STYLE.
            </h3>
          </div>

          <div className='flex items-start gap-2 mt-4'>
            <div className=' font-bellefair text-[40px]'>01</div>

            <div>
              <p className='font-poppins text-xs uppercase'>
                Start on : 08:00 GTS . Monday
              </p>

              <p className='font-satoshi font-medium text-[10px] my-4'>
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
          </div>

          <div className='flex items-center justify-end gap-8'>
            <button className='font-satoshi text-sm underline underline-offset-2'>
              See more
            </button>

            <button className='font-satoshi text-sm border px-2 py-2 rounded-[10px]'>
              Set a reminder
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}

      <section
        aria-label='navigation links to specific locations on website'
        className='-mx-3 overflow-hidden border-t border-t-black mb-16'
      >
        <Link url='/marketplace'>Explore marketplace</Link>

        <Link url='/auctions'>See auctions</Link>
      </section>

      {/* Top Creators section  */}

      <section
        aria-label='showcase of the best creators for the week'
        className='bg-light_gray_clr-300 -mx-3 relative h-[250px] overflow-hidden'
      >
        <div className='flex items-start justify-between'>
          <h1 className='font-clash_display font-semibold text-2xl uppercase p-3 text-left '>
            top creators of the week
          </h1>

          <ul className='flex font-clash_display text-[10px] capitalize -mr-8 gap-4'>
            <li>editoral</li>

            <li className='list-disc'>fashion</li>

            <li className='list-disc'>lifestyle</li>
          </ul>
        </div>

        <div className='font-clash_display font-extralight text-[13px] text-opacity-50 text-center'>
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </div>

        <div className='font-clash_display font-bold absolute z-10 text-right -bottom-4 right-0'>
          <p className='text-[32px] uppercase text-dark_gray_clr-200'>circa</p>

          <p className='text-[60px] line-through text-dark_gray_clr-700'>
            1985
          </p>
        </div>

        <div className='absolute z-30 bottom-0 left-[40%] w-[40px] h-[150px] bg-black'></div>
      </section>
    </div>
  );
};

export default HomePage;
