import { Outlet } from 'react-router-dom';

import menuIcon from '@/assets/icons/navigation/icon-menu.svg';
import searchIcon from '@/assets/icons/navigation/icon-search.svg';
import cartIcon from '@/assets/icons/navigation/icon-cart.svg';
import closeIcon from '@/assets/icons/navigation/icon-close.svg';
import chatIcon from '@/assets/icons/navigation/icon-chat.svg';

const navLinks = ['home', 'auctions', 'marketplace', 'drops'];

const navbarStyles = {
  header: 'flex items-center justify-between py-7 relative',
  logo: 'font-stix font-bold text-2xl uppercase text-dark text-dark_gray_clr-700',
  searchIcon: 'w-[28px]',
  cartIcon: 'w-[31px]',
  menu: 'fixed inset-0 z-30 bg-white px-6 py-8',
  menu_header: 'flex items-center justify-between',
  navLink:
    'text-dark_gray_clr-200 font-satoshi font-medium text-2xl capitalize my-[50px]',
  chatIcon: 'absolute bottom-8 right-3',
};

const MobileMenu = () => {
  return (
    <div className={navbarStyles.menu}>
      <div className={navbarStyles.menu_header}>
        <h1 className={navbarStyles.logo}>artsy.</h1>

        <button aria-label='click to close mobile menu' aria-pressed='false'>
          <img src={closeIcon} role='presentation' />
        </button>
      </div>

      <nav>
        <ul>
          {navLinks.map((navLink) => (
            <li
              key={navLink}
              className={navbarStyles.navLink}
              aria-label={`click to go to ${navLink} page`}
            >
              {navLink}
            </li>
          ))}
        </ul>
      </nav>

      <button className={navbarStyles.chatIcon} aria-pressed='false'>
        <img src={chatIcon} role='presentation' />
      </button>
    </div>
  );
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

      <MobileMenu />

      <Outlet />
    </>
  );
};

export default Navbar;
