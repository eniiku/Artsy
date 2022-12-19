import { useParams } from 'react-router-dom';

import styles from '@/styles';
import viewsIcon from '@/assets/icons/auction/icon-views.svg';
import closeIcon from '@/assets/icons/navigation/icon-close.svg';

const LiveAuctionPage = () => {
  const { id } = useParams();

  return (
    <div className={`h-screen bg-green-700 font-satoshi ${styles.xPadding}`}>
      {/* Header section */}

      <div className='flex justify-between font-medium py-5 text-white items-center'>
        <h3 className='text-white'>Tag: Lost or Wither</h3>

        <div className='flex gap-3 text-[13px]'>
          <div className='bg-[#006CA2] uppercase py-1 px-3 rounded-[5px] tracking-wider'>
            live
          </div>

          <div className='bg-white bg-opacity-40 py-1 px-2 rounded-[5px] flex items-center gap-[9px] '>
            <img src={viewsIcon} role='presentation' className='w-[15px]' />
            <span>399</span>
          </div>

          <img src={closeIcon} role='presentation' className='w-[15px]' />
        </div>
      </div>

      <div>current bid</div>

      <div>
        <ul>
          <li>chat</li>
          <li>chat</li>
          <li>chat</li>
        </ul>

        <div>
          <form>
            <input
              type='text'
              name='convo'
              id=''
              placeholder='Join conversation'
            />
          </form>

          <div>like btn</div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuctionPage;
