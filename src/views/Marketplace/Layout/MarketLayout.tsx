import Breadcrumbs from '@/components/layout/navigation/Breadcrumbs/Breadcrumbs';
import { Outlet } from 'react-router-dom';
import styles from '../../../styles';

const MarketLayout = () => {
  return (
    <div className={`${styles.xPadding}`}>
      <div className='my-6'>
        <Breadcrumbs />
      </div>

      <Outlet />
    </div>
  );
};

export default MarketLayout;
