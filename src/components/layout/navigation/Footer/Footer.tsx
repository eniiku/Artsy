import mailIcon from '@/assets/icons/footer/icon-mail.svg';
import markerIcon from '@/assets/icons/footer/icon-marker.svg';

const Footer = () => {
  return (
    <section
      aria-label='subscribe to our daily newsletter'
      className='pt-16 pb-4 px-4 text-dark_gray_clr-200'
    >
      <h1 className='font-baskervville text-2xl uppercase text-left'>
        newsletter
      </h1>

      <p className='font-satoshi text-[11px] mt-3'>
        SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
      </p>

      <form className='mt-4 mb-4 w-full'>
        <label
          htmlFor='newsletter'
          className='font-satoshi text-[10px] uppercase'
        >
          enter your email here
        </label>
        <input
          type='search'
          name='newsletter'
          className='border border-black w-11/12 py-3 pl-2'
        />

        <button
          className='py-4 px-12 bg-dark_gray_clr-500 uppercase text-white
          font-satoshi text-[11px] mt-8'
        >
          subscribe
        </button>
      </form>

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
