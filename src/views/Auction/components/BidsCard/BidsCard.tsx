import likeIcon from '@/assets/icons/product/icon-like.svg';

const styles = {
  xPadding: 'px-6',
};

const BidsCard = () => {
  return (
    <div>
      <div className={`bg-white rounded-2xl shadow-xl ${styles.xPadding} py-2`}>
        <div className='flex justify-end'>
          <div className='border border-black p-1 rounded-full w-fit'>
            <img src={likeIcon} role='presentation' className='w-5' />
          </div>
        </div>

        <div className='h-[185px] bg-yellow-400 rounded-lg my-2'>
          image placeholder
        </div>

        <div className='font-satoshi font-bold text-xl flex items-center justify-between'>
          <h3>name</h3>
          <h3>price</h3>
        </div>
      </div>

      {/* Details of Item on Auction */}

      <ul
        className={`${styles.xPadding} px-6 font-satoshi text-xl text-dark_gray_clr-200`}
      >
        <li className='mt-[30px] '>
          Creator: <span className='text-[#006CA2] font-bold'>Jacob Banks</span>
        </li>

        <li className='mt-[30px]'>
          Date: <span className='font-bold'>12/08/2022</span>
        </li>
      </ul>

      {/* Bid Card Controls */}

      <div
        className={`${styles.xPadding} px-6 py-3 mt-[30px] bg-[#F6F4F4] rounded-[10px] flex items-center
          justify-between font-satoshi`}
      >
        <div className='flex flex-col justify-between font-bold gap-4'>
          <h3 className='text-light_gray_clr-700'>Current bid</h3>

          <h3 className='text-dark_gray_clr-200'>price ETH</h3>
        </div>

        <button className='font-medium text-white bg-blue_clr-700 px-12 py-3 rounded-sm'>
          Place bid
        </button>
      </div>
    </div>
  );
};

export default BidsCard;
