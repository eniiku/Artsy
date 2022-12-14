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

      <div className='mt-8 lg:hidden'>
        <h3 className='uppercase font-poppins font-light'>reach us</h3>

        <div className='text-[11px] mt-3'>
          <div className='flex items-center gap-4 mb-4'>
            <img src={mailIcon} role='presentation' className='w-7' />

            <p className='font-satoshi text-[26px]'>artsystudios@gmail.com</p>
          </div>

          <div className='flex items-center gap-4 mb-4'>
            <img src={markerIcon} role='presentation' className='w-7' />

            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}

      <div className='hidden lg:block'>
        <div className='font-satoshi flex items-center justify-around text-dark_gray_clr-200 '>
          <h1 className='font-clash_display font-semibold text-5xl uppercase text-dark_gray_clr-300'>
            arsty.
          </h1>

          <div className='flex gap-24 my-16 text-2xl capitalize '>
            <ul>
              {['blog', 'wallets', 'rates', 'high bids'].map((link) => (
                <li key={link} className='my-4'>
                  {link}
                </li>
              ))}
            </ul>

            <ul>
              {['blog', 'wallets', 'rates', 'high bids'].map((link) => (
                <li key={link} className='my-4'>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className='self-start mt-20'>
            <div className='font-satoshi text-[26px]'>
              <div className='flex items-center gap-2 mb-8'>
                <img
                  src={mailIcon}
                  role='presentation'
                  className='w-7 lg:w-[45px]'
                />

                <p>artsystudios@gmail.com</p>
              </div>

              <div className='flex items-center gap-4'>
                <img
                  src={markerIcon}
                  role='presentation'
                  className='w-7 lg:w-[40px]'
                />

                <p>Lagos, Nigeria.</p>
              </div>
            </div>
          </div>
        </div>

        <p className='font-rubik text-medium text-2xl text-dark_gray_clr-200 text-opacity-40 text-center'>
          Artsystudios © 2022. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
