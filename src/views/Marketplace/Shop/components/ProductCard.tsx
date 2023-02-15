import outlinedCloseIcon from '@/assets/icons/product/icon-close-outline.svg';

const ProductCard = () => {
  return (
    <div className='flex gap-8'>
      <div className='min-h-[125px] min-w-[125px] bg-slate-400'>
        {/* image placeholder */}
      </div>

      <div className='font-satoshi flex flex-col justify-between'>
        <h4 className='font-cardo italic text-light_gray_clr-700'>Editorals</h4>

        <h1 className='font-bold text-[22px] text-dark_gray_clr-200'>
          Philomena
        </h1>

        <div className='border-[0.5px] border-black rounded-full grid grid-cols-3'>
          <button className='py-1 px-4 font-medium text-xl'>-</button>
          <h3 className='border-x-[0.2px] border-black py-1 px-4 font-medium text-xl'>
            1
          </h3>
          <button className='py-1 px-4 font-medium text-xl'>+</button>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center'>
        <img
          src={outlinedCloseIcon}
          alt=' '
          role='presentation'
          className='w-10 h-10'
        />

        <h2 className='font-cardo font-bold text-2xl text-dark_gray_clr-300'>
          $36.50
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
