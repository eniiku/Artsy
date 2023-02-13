const DropsCard = () => {
  return (
    <div>
      <div className='min-h-[225px] rounded-[10px] bg-green-700 relative font-stix'>
        <div className='font-medium bg-blue_clr-500 text-white text-xs px-6 py-1 absolute right-3 top-3 rounded-md uppercase '>
          upcoming
        </div>

        <div className='bg-[#F5F4F4] bg-opacity-30 absolute bottom-3 left-3 right-3 rounded-[10px] flex flex-col gap-4 items-start py-2 px-6'>
          <p className='font-satoshi'>Time remaining</p>

          <h1 className='text-[22px]'>06 hrs : 45 min : 22 s</h1>
        </div>
      </div>

      <div className='font-satoshi mt-4'>
        <h3>November 21 at 11 am WAT</h3>

        <h1 className='font-medium text-2xl my-4'>Eyo : Eko For Show</h1>

        <p className='text-light_gray_clr-700'>
          Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae
          tempus. Sed nunc tempus aliquet lectus ut vulputate.
        </p>

        <h3 className='font-medium text-xl my-4'>
          Creator : <span className='text-[#006CA2]'>Aliya Minat</span>
        </h3>

        <button className='text-[#006CA2] underline underline-offset-4'>
          Get notified
        </button>
      </div>
    </div>
  );
};

export default DropsCard;
