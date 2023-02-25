interface LiveCardProps {
  url: string;
}

const LiveCard = (props: LiveCardProps) => {
  const { url } = props;
  return (
    <div className='max-w-[230px] max-h-[190px] rounded-2xl bg-purple-700 relative lg:max-w-[490px] lg:max-h-[400px]'>
      <img
        src={url}
        alt=' '
        className='w-[230px] h-[190px] lg:w-[490px] lg:h-[390px] object-center object-cover rounded-2xl max-w-max'
      />
      <div
        className=' w-[90%] absolute py-3 bg-[#F5F4F4] bg-opacity-25 rounded-lg
        bottom-4 left-3 border-[0.5px] border-white backdrop-blur-sm lg:bottom-8 lg:left-6
        lg:py-6'
      >
        {/* TODO: change font family */}
        <h3 className='text-center font-stix text-xl text-white lg:text-[40px]'>
          6hr : 40mins : 15s
        </h3>
      </div>
    </div>
  );
};

export default LiveCard;
