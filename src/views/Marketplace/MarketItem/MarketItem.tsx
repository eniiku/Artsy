const MarketItem = () => {
  return (
    <>
      {/* mobile view */}
      <div className='lg:hidden'>
        <div className='min-h-[380px] bg-indigo-300'>
          {/* image placeholder */}
        </div>
        <div
          className='font-satoshi font-medium uppercase flex justify-between items-center mt-2
          text-dark_gray_clr-200'
        >
          <h3>name</h3>
          <h3>price</h3>
        </div>
      </div>

      {/* desktop view */}

      <div className='bg-white rounded-2xl shadow-2xl w-fit p-4 hidden lg:block'>
        <div className='w-[240px] h-[280px] bg-indigo-300 rounded-lg'>
          image placeholder
        </div>

        <div className='font-satoshi text-dark_gray_clr-200'>
          <h3 className='uppercase font-[22px] mt-2'>name</h3>

          <h3 className='font-bold text-[28px] mt-4'>price</h3>
        </div>
      </div>
    </>
  );
};

export default MarketItem;
