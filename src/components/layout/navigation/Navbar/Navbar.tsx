import { Outlet } from 'react-router-dom';

import menuIcon from '@/assets/icons/navigation/icon-menu.svg';
import searchIcon from '@/assets/icons/navigation/icon-search.svg';
import cartIcon from '@/assets/icons/navigation/icon-cart.svg';

const navbarStyles = {
  header: 'flex items-center justify-between py-7',
  logo: 'font-stix font-bold text-2xl uppercase',
  searchIcon: 'w-[28px]',
  cartIcon: 'w-[31px]',
};

const Navbar = () => {
  return (
    <>
      <header className={navbarStyles.header}>
        <button aria-label='click to open mobile menu' aria-pressed='false'>
          <img src={menuIcon} role='presentation' />
        </button>

        <h1 className={navbarStyles.logo}>arsty.</h1>

        <div>
          <button
            aria-label='click to search through website'
            aria-pressed='false'
          >
            <img
              src={searchIcon}
              role='presentation'
              className={navbarStyles.searchIcon}
            />
          </button>

          <button
            aria-label='click to open view products in cart'
            aria-pressed='false'
          >
            <img
              src={cartIcon}
              role='presentation'
              className={navbarStyles.cartIcon}
            />
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
