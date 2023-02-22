import ethIcon from '@/assets/icons/product/ethereum.svg';
import likeIcon from '@/assets/icons/product/icon-like.svg';

interface MarketItemFeatProps {
  url: string;
  text: string;
  price: number;
}

const MarketItemFeat = (props: MarketItemFeatProps) => {
  const { url, text, price } = props;

  return (
    <div className='border border-dark_gray_clr-200 px-4 py-2 lg:px-12 lg:py-8'>
      <div className='flex justify-end w-full'>
        <img src={likeIcon} role='presentation' className='lg:w-[43px]' />
      </div>

      {/* image */}
      <div className='bg-indigo-300 w-full lg:max-w-[450px] max-h-[420px] my-2 lg:my-8'>
        <img
          src={url}
          alt=' '
          className='w-full lg:w-[450px] h-[420px] object-cover object-center'
        />
      </div>

      <div className='font-satoshi font-medium text-2xl flex justify-between items-center lg:text-[32px]'>
        <h3 className='capitalize'>{text}</h3>

        <h3 className='flex items-center gap-2 lg:gap-5'>
          <img src={ethIcon} role='presentation' className='lg:h-9' />
          {price}
        </h3>
      </div>
    </div>
  );
};

export default MarketItemFeat;
