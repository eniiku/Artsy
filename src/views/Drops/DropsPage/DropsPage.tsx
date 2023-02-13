import chevronDownIcon from '@/assets/icons/chevron/icon-chevron-down-outlined.svg';
import DropsCard from '../DropsCard/DropsCard';
import styles from '../../../styles';
import { Footer } from '../../../components/layout';

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

      {/* Drops Card Section */}
      <ul className='mt-16'>
        {[1, 2, 3, 4].map((card) => (
          <li key={card} className='mb-14 lg:mb-28'>
            <DropsCard />
          </li>
        ))}
      </ul>

      <div className='hidden lg:block text-center'>
        <button className='text-[30px] font-medium px-14 py-2 rounded-[10px] border border-black my-8 text-center'>
          See more
        </button>

        <Footer />
      </div>
    </div>
  );
};

export default DropsPage;
