import ethIcon from '@/assets/icons/product/ethereum.svg';
import likeIcon from '@/assets/icons/product/icon-like.svg';

const MarketItemFeat = () => {
  return (
    <div className='border border-dark_gray_clr-200 px-4 py-2'>
      <div className='flex justify-end w-full'>
        <img src={likeIcon} role='presentation' />
      </div>

      {/* image */}

      <div className='bg-indigo-300 w-full h-[420px] my-2'></div>

      <div className='font-satoshi font-medium text-2xl flex justify-between items-center'>
        <h3 className='capitalize'>sassy</h3>

        <h3 className='flex items-center gap-2'>
          <img src={ethIcon} role='presentation' />
          3.20
        </h3>
      </div>
    </div>
  );
};

export default MarketItemFeat;
