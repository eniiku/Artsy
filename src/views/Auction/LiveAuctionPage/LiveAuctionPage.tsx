import { useParams } from 'react-router-dom';

import styles from '@/styles';
import likeIcon from '@/assets/icons/product/icon-like.svg';
import sendIcon from '@/assets/icons/auction/icon-send.svg';
import viewsIcon from '@/assets/icons/auction/icon-views.svg';
import closeIcon from '@/assets/icons/navigation/icon-close.svg';

const LiveAuctionPage = () => {
  const { id } = useParams();

  return (
    <div
      className={`h-screen bg-green-700 font-satoshi ${styles.xPadding} flex flex-col`}
    >
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

          <img src={closeIcon} role='presentation' className='w-[15px] ml-4' />
        </div>
      </div>

      <div className='flex-1 grid place-content-center font-bold text-3xl text-white'>
        Current bid
      </div>

      <div className='h-[40%] flex flex-col justify-end mb-3 overflow-hidden'>
        <ul className='mb-4'>
          {[
            {
              name: 'ella flynn',
              comment: 'Love thissss!',
              image: 'bg-blue-300',
            },
            {
              name: 'boma jango',
              comment: '0.009 eth',
              image: 'bg-indigo-600',
            },
            {
              name: 'madam benson',
              comment: 'God abeg!',
              image: 'bg-amber-500',
            },
            {
              name: 'ella flynn',
              comment: 'tight bid',
              image: 'bg-indigo-900',
            },
          ].map((user) => (
            <li
              key={user.comment}
              className='flex gap-2 items-center text-white text-[13px] my-4'
            >
              <div
                className={`w-[32px] h-[32px] rounded-full ${user.image}`}
              ></div>

              <div>
                <h3 className='capitalize font-medium'>{user.name}</h3>

                <p>{user.comment}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* input section */}

        <div className='flex items-center justify-between gap-5'>
          <div className='relative w-full h-fit'>
            <form>
              <input
                type='text'
                name='convo'
                placeholder='Join conversation'
                className='bg-transparent border border-white border-opacity-[.35] w-full rounded-2xl py-1 px-5'
              />
            </form>

            <img
              src={sendIcon}
              role='presentation'
              className='w-[18px] absolute bottom-2 right-7'
            />
          </div>

          <div className='p-2 bg-white bg-opacity-[.35] rounded-full'>
            <img src={likeIcon} role='presentation' className='w-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuctionPage;
