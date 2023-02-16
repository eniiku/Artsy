import metamaskIcon from '@/assets/icons/crypto/metamask.png';
import coinbaseIcon from '@/assets/icons/crypto/coinbase .png';
import phantomIcon from '@/assets/icons/crypto/phantom.png';
import walletconnectIcon from '@/assets/icons/crypto/walletconnect.png';
import plusOutlinedIcon from '@/assets/icons/crypto/plus-outlined.png';
import metamaskDesktopIcon from '@/assets/icons/crypto/metamask-desktop.png';
import coinbaseDesktopIcon from '@/assets/icons/crypto/coinbase-desktop.png';
import phantomDesktopIcon from '@/assets/icons/crypto/phantom-desktop.png';
import walletconnectDesktopIcon from '@/assets/icons/crypto/walletconnect-desktop.png';

const PaymentForm = () => {
  return (
    <form className='lg:bg-white lg:rounded-lg lg:px-8 lg:py-14 lg:shadow-md lg:border-[0.1px] lg:border-gray-100'>
      <div className='font-satoshi mt-4'>
        <div className='lg:flex lg:justify-between lg:items-center lg:mt-8'>
          <div className='flex items-center gap-3'>
            <input
              type='checkbox'
              id='select'
              checked
              className='ml-4 lg:ml-0 lg:w-6 lg:h-6 lg:rounded-full'
            />
            <label
              htmlFor='select'
              className='font-medium text-xl text-dark_gray_clr-300 lg:text-[28px]'
            >
              Select a wallet
            </label>
          </div>

          <div className='gap-3 items-center justify-center hidden lg:flex'>
            {[
              {
                source: metamaskDesktopIcon,
                company: 'metamask',
              },
              {
                source: coinbaseDesktopIcon,
                company: 'coinbase',
              },
              {
                source: phantomDesktopIcon,
                company: 'phantom',
              },
              {
                source: walletconnectDesktopIcon,
                company: 'walletconnect',
              },
            ].map((icon) => (
              <img
                src={icon.source}
                alt={icon.company}
                role='presentation'
                className='w-[50px] h-[50px]'
              />
            ))}
          </div>
        </div>

        <div>
          <p className='my-4 text-light_gray_clr-700 lg:text-2xl lg:w-[80%] lg:ml-8 lg:mb-16'>
            Connect with one of our available wallet providers or add and
            connect a new wallet.
          </p>

          <div className='flex gap-3 items-center justify-center lg:hidden'>
            {[
              {
                source: metamaskIcon,
                company: 'metamask',
              },
              {
                source: coinbaseIcon,
                company: 'coinbase',
              },
              {
                source: phantomIcon,
                company: 'phantom',
              },
              {
                source: walletconnectIcon,
                company: 'walletconnect',
              },
              {
                source: plusOutlinedIcon,
                company: 'click for more wallets to choose from',
              },
            ].map((icon) => (
              <img
                src={icon.source}
                alt={icon.company}
                role='presentation'
                className='w-[42px] h-[42px]'
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wallet Type Section */}

      <div className='form-container'>
        <label htmlFor='wallet' className='form-label'>
          wallet type
        </label>

        <input type='text' id='wallet' className='form-input' />
      </div>

      {/* Key Section */}

      <div className='form-container'>
        <label htmlFor='key' className='form-label'>
          key
        </label>

        <input
          type='text'
          id='key'
          className='form-input'
          placeholder='Please enter your key'
        />
      </div>

      {/* Date Section */}
      <div className='lg:grid lg:grid-cols-2 lg:gap-4'>
        <div className='form-container'>
          <label htmlFor='date' className='form-label'>
            expiry date
          </label>

          <input type='date' id='date' className='form-input' />
        </div>

        {/* CVV section */}

        <div className='hidden lg:block lg:mb-8'>
          <div className='form-container'>
            <label htmlFor='code' className='form-label'>
              CVV
            </label>

            <input
              type='text'
              id='name'
              className='form-input'
              placeholder='***'
            />
          </div>
        </div>
      </div>

      {/* Code section */}

      <div className='form-container lg:hidden'>
        <label htmlFor='code' className='form-label'>
          safe code
        </label>

        <input type='text' id='name' className='form-input' />
      </div>

      {/* Checkbox section  */}

      <div className='flex gap-4'>
        <input type='checkbox' id='save' />

        <label
          htmlFor='save'
          className='font-satoshi text-[13px] text-[#747474] lg:text-xl'
        >
          Save my wallet details & information for future transactions
        </label>
      </div>
    </form>
  );
};

export default PaymentForm;
