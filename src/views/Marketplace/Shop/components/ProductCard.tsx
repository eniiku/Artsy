import outlinedCloseIcon from '@/assets/icons/product/icon-close-outline.svg';

const ProductCard = () => {
  return (
    <div className='flex gap-8 lg:border-t-[0.3px] lg:border-[#747474] lg:pt-14'>
      <div className='min-h-[125px] min-w-[125px] lg:min-h-[200px] lg:min-w-[210px] bg-slate-400'>
        {/* image placeholder */}
      </div>

      <div className='font-satoshi flex flex-col justify-between lg:flex-grow'>
        <h4 className='font-cardo italic text-light_gray_clr-700 lg:hidden'>
          Editorals
        </h4>

        <h1 className='font-bold text-[22px] lg:text-2xl text-dark_gray_clr-200'>
          Philomena '22
        </h1>

        <h4 className='hidden lg:block text-2xl text-[#888888]'>Clearmane</h4>

        <h5 className='text-[#888888]'>
          Size: <span className='text-dark_gray_clr-200'>200ft</span>
        </h5>

        <div className='border-[0.5px] border-black lg:border-none rounded-full grid grid-cols-3 lg:w-fit'>
          <button className='py-1 px-4 font-medium text-xl lg:text-[32px] lg:px-0 lg:py-0 text-left'>
            -
          </button>
          <h3 className='border-x-[0.2px] border-black py-1 px-4 font-medium text-xl lg:text-[32px] lg:py-0 lg:px-4 lg:border-none'>
            1
          </h3>
          <button className='py-1 px-4 font-medium text-xl lg:text-[32px] lg:px-0 lg:py-0 lg:text-right'>
            +
          </button>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center'>
        <img
          src={outlinedCloseIcon}
          alt=' '
          role='presentation'
          className='w-10 h-10'
        />

        <h2 className='font-cardo font-bold text-2xl text-dark_gray_clr-300 lg:text-3xl'>
          $36.50
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
