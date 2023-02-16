import metamaskIcon from '@/assets/icons/crypto/metamask.png';
import coinbaseIcon from '@/assets/icons/crypto/coinbase .png';
import phantomIcon from '@/assets/icons/crypto/phantom.png';
import walletconnectIcon from '@/assets/icons/crypto/walletconnect.png';
import plusOutlinedIcon from '@/assets/icons/crypto/plus-outlined.svg';

const PaymentForm = () => {
  return (
    <form>
      <div className='font-satoshi mt-4'>
        <div className='flex items-center gap-3'>
          <input type='checkbox' id='select' className='ml-4' />
          <label
            htmlFor='select'
            className='font-medium text-xl text-dark_gray_clr-300'
          >
            Select a wallet
          </label>
        </div>

        <div>
          <p className='my-4 text-light_gray_clr-700'>
            Connect with one of our available wallet providers or add and
            connect a new wallet.
          </p>

          <div className='flex gap-3 items-center justify-center'>
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

        <input type='text' id='key' className='form-input' />
      </div>

      {/* Date Section */}

      <div className='form-container'>
        <label htmlFor='date' className='form-label'>
          expiry date
        </label>

        <input type='date' id='date' className='form-input' />
      </div>

      {/* Code section */}

      <div className='form-container'>
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
