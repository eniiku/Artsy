const LiveCard = () => {
  return (
    <div className='w-[230px] h-[190px] rounded-2xl bg-purple-700 relative lg:w-[490px] lg:h-[400px]'>
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
