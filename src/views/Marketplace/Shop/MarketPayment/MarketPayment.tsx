import Button from '../components/Button';
import lockIcon from '@/assets/icons/crypto/icon-lock.svg';

const MarketPayment = () => {
  return (
    <div>
      <div className='flex items-center gap-2'>
        <img src={lockIcon} alt=' ' role='presentation' className='h-5' />

        <h6 className='font-satoshi first-letter:uppercase'>secure server</h6>
      </div>

      <div className='my-10'>{/* Payment Form */}</div>

      <div className='text-center mb-8'>
        <Button buttonAction={undefined} type='primary'>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default MarketPayment;
