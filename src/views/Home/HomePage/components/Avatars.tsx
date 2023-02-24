const Avatars = () => {
  return (
    <div>
      <ul className='flex -mr-20'>
        {[1, 2, 3, 4, 5].map((item) => (
          <li
            key={item}
            className='w-[42px] h-[42px] lg:w-[50px] lg:h-[50px] rounded-full avatar-icons'
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Avatars;
