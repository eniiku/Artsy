import Button from '../components/Button';
import lockIcon from '@/assets/icons/crypto/icon-lock.svg';
import PaymentForm from '../components/PaymentForm';
import CartDetails from '../components/CartDetails';

const MarketPayment = () => {
  return (
    <div>
      <div className='lg:flex lg:justify-between lg:items-center lg:mt-16'>
        <h4 className='first-letter:uppercase font-satoshi font-medium text-[28px] hidden mb-10 lg:block '>
          payment method
        </h4>

        <div className='flex items-center gap-2 lg:gap-4'>
          <img
            src={lockIcon}
            alt=' '
            role='presentation'
            className='h-5 lg:h-6'
          />

          <h6 className='font-satoshi first-letter:uppercase text-2xl'>
            secure server
          </h6>
        </div>
      </div>

      <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
        <div>
          <PaymentForm />

          <div className='text-center mb-8 mt-10 lg:mb-16 lg:mt-20'>
            <Button
              buttonAction={undefined}
              type='primary'
              className='lg:w-full'
            >
              Confirm
            </Button>
          </div>
        </div>

        <div className='hidden lg:block'>
          <div className='font-satoshi'>
            <h1 className='font-medium text-dark_gray_clr-700 text-[28px] mb-6 capitalize'>
              payment summary
            </h1>

            <div className='border-t-[0.3px] border-[#747474] py-14'>
              <h3 className='text-[26px] text-dark_gray_clr-700 mb-4'>
                Metamask wallet : 002345KJi90pzzz3
              </h3>

              <p className='text-2xl text-light_gray_clr-700'>
                Actively linked to Yaba, Lagos Nigeria.
              </p>
            </div>

            <div className='border-y-[0.3px] border-[#747474]'>
              <p className='text-2xl text-dark_gray_clr-700 py-14 leading-[1.75]'>
                Expected arrival date: Between 22nd September and 26th September
                20222
              </p>
            </div>
          </div>

          <CartDetails />
        </div>
      </div>
    </div>
  );
};

export default MarketPayment;
