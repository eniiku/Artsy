import { Outlet } from 'react-router-dom';

const MarketLayout = () => {
  return (
    <div className='mx-2'>
      <div className='my-6'>breadcrumbs</div>

      <Outlet />
    </div>
  );
};

export default MarketLayout;
