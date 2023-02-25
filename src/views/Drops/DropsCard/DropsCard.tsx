interface DropsCardProps {
  creator: string;
  title: string;
  date: {
    day: number;
    month: string;
    time: string;
    timezone: string;
  };
  url: string;
  status: string;
}

const DropsCard = (props: DropsCardProps) => {
  const { creator, title, date, url, status } = props;

  return (
    <div className='lg:flex gap-8 h-[225px] lg:h-[440px]'>
      <div className='h-[225px] lg:min-w-[680px] lg:h-[440px] rounded-[10px] bg-green-700  relative font-stix'>
        <img
          src={url}
          alt=' '
          className='absolute inset-0 object-cover object-center w-full h-[225px] lg:w-[680px] lg:h-[440px] rounded-[10px]'
        />
        <div
          className={`lg:hidden font-inter font-medium text-white text-xs px-6 py-1 absolute right-3 top-3 rounded-md uppercase ${
            status === 'upcoming'
              ? 'bg-blue_clr-500'
              : status === 'live now'
              ? 'bg-[#3EA03B]'
              : 'bg-[#999EA5]'
          }`}
        >
          {status}
        </div>

        <div className='bg-[#F5F4F4] bg-opacity-30 absolute bottom-3 left-3 right-3 lg:left-6 lg:right-6 rounded-[10px] py-2 px-6 lg:px-10 lg:py-4 text-white lg:flex items-end justify-between'>
          <div className='flex flex-col gap-4 items-start'>
            <p className='font-satoshi lg:text-[28px]'>Time remaining</p>

            <h1 className='text-[22px] lg:text-[40px]'>
              06 hrs : 45 min : 22 s
            </h1>
          </div>

          <button className='hidden lg:block bg-blue_clr-500 px-10 py-1 font-satoshi text-2xl rounded-full'>
            Join
          </button>
        </div>
      </div>

      <div className='font-satoshi h-full mt-4 lg:text-xl lg:mt-0 lg:flex lg:flex-col lg:justify-between lg:items-start'>
        <div
          className={`hidden lg:block uppercase px-14 py-2 rounded-[10px] w-fit font-inter font-medium text-lg text-white ${
            status === 'upcoming'
              ? 'bg-blue_clr-500'
              : status === 'live now'
              ? 'bg-[#3EA03B]'
              : 'bg-[#999EA5]'
          }`}
        >
          {status}
        </div>

        <h3 className='first-letter:uppercase'>{`${date.month} ${date.day} at ${date.time} ${date.timezone}`}</h3>

        <h1 className='font-medium text-2xl my-4 lg:text-4xl lg:my-6 capitalize'>
          {title}
        </h1>

        <p className='text-light_gray_clr-700 lg:w-[60%]'>
          Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae
          tempus. Sed nunc tempus aliquet lectus ut vulputate.
        </p>

        <h3 className='font-medium text-xl my-4 lg:text-2xl lg:my-6'>
          Creator : <span className='text-[#006CA2] capitalize'>{creator}</span>
        </h3>

        <button className='text-[#006CA2] underline underline-offset-4'>
          Get notified
        </button>
      </div>
    </div>
  );
};

export default DropsCard;
