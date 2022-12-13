import mailIcon from '@/assets/icons/footer/icon-mail.svg';
import markerIcon from '@/assets/icons/footer/icon-marker.svg';

const Footer = () => {
  return (
    <section
      aria-label='subscribe to our daily newsletter'
      className='pt-16 pb-4 px-4 text-dark_gray_clr-200 lg:mt-24 lg:mb-8 lg:p-0'
    >
      <div className='lg:border border-dark_gray_clr-200 md:py-12 md:px-52'>
        <h1
          className='font-baskervville text-2xl uppercase text-left lg:text-3xl
          lg:text-center'
        >
          newsletter
        </h1>

        <p
          className='font-satoshi text-[11px] mt-3 uppercase lg:text-[32px] md:text-center 
          lg:normal-case md:mt-6'
        >
          Subscribe to get daily updates on new drops & exciting deals
        </p>

        <form
          className='mt-4 mb-4 w-full lg:w-11/12 lg:mt-8 lg:flex lg:gap-4 lg:items-center 
          lg:justify-center'
        >
          <div className='relative w-full'>
            <label
              htmlFor='newsletter'
              className='font-satoshi text-[10px] uppercase lg:text-base absolute top-[28%] left-16'
            >
              enter your email here
            </label>
            <input
              type='search'
              name='newsletter'
              className='border border-black w-11/12 py-3 pl-2 lg:py-[14px]'
            />
          </div>

          <button
            className='py-4 px-12 bg-dark_gray_clr-500 uppercase text-white
            font-satoshi text-[11px] mt-8 lg:mt-0 lg:text-base'
          >
            subscribe
          </button>
        </form>
      </div>

      <div className='mt-8'>
        <h3 className='uppercase font-poppins font-light'>reach us</h3>

        <div className='text-[11px] mt-3'>
          <div className='flex items-center gap-4 mb-4'>
            <img src={mailIcon} role='presentation' className='w-7' />

            <p>artsystudios@gmail.com</p>
          </div>

          <div className='flex items-center gap-4 mb-4'>
            <img src={markerIcon} role='presentation' className='w-7' />

            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
