const LiveCard = () => {
  return (
    <div className='w-[230px] h-[190px] rounded-2xl bg-purple-700 relative'>
      <div
        className=' w-[90%] absolute py-3 bg-[#F5F4F4] bg-opacity-25 rounded-lg
        bottom-4 left-3 border-[0.5px] border-white backdrop-blur-sm'
      >
        {/* TODO: change font family */}
        <h3 className='text-center font-stix text-xl text-white'>
          6hr : 40mins : 15s
        </h3>
      </div>
    </div>
  );
};

export default LiveCard;
