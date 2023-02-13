import chevronDownIcon from '@/assets/icons/chevron/icon-chevron-down-outlined.svg';
import styles from '../../../styles';

const DropsPage = () => {
  return (
    <div className={`font-satoshi ${styles.xPadding}`}>
      <div>breadcrumbs</div>

      <div className='text-center'>
        <h1 className='font-bold text-3xl lg:text-5xl'>Upcoming drops</h1>

        <p className='text-lg lg:text-[32px] w-[80%] my-4 lg:my-12 mx-auto text-light_gray_clr-700'>
          You may turn on notifications so that no drop will miss you.
        </p>

        <button className='font-medium text-[22px] lg:text-4xl py-[10px] lg:py-5 px-16 lg:px-32 rounded-lg border border-black'>
          Notify me
        </button>
      </div>

      <div className='my-5 flex justify-end lg:hidden'>
        <div className='text-lg flex gap-2 items-center'>
          Sort by
          <span className='mt-2'>
            <img src={chevronDownIcon} role='presentation' />
          </span>
        </div>
      </div>

      <div>drops card</div>
    </div>
  );
};

export default DropsPage;
