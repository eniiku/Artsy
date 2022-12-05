import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import bellIcon from '@/assets/icons/navigation/icon-bell.svg';
import cartIcon from '@/assets/icons/navigation/icon-cart.svg';
import closeIcon from '@/assets/icons/navigation/icon-close.svg';
import chatIcon from '@/assets/icons/navigation/icon-chat.svg';
import menuIcon from '@/assets/icons/navigation/icon-menu.svg';
import searchIcon from '@/assets/icons/navigation/icon-search.svg';

const navLinks = ['home', 'auctions', 'marketplace', 'drops'];

const navbarStyles = {
  header: 'flex items-center justify-between py-7 lg:py-12 relative',
  logo: 'font-stix font-bold text-2xl lg:text-[32px] uppercase text-dark text-dark_gray_clr-700',
  searchIcon: 'w-[28px] lg:w-[48px]',
  cartIcon: 'w-[31px] lg:w-[49px]',
  bellIcon: 'w-[46px]',
  menu: 'fixed inset-0 z-30 bg-white px-6 py-8',
  menu_header: 'flex items-center justify-between',
  navLink:
    'text-dark_gray_clr-200 font-satoshi font-medium text-2xl capitalize my-[50px]',
  chatIcon: 'absolute bottom-8 right-3',
};

interface MenuProps {
  linkArr: string[];
  handleCloseMenu: () => void;
}

const MobileMenu = (props: MenuProps) => {
  const { linkArr, handleCloseMenu } = props;

  return (
    <div className={navbarStyles.menu}>
      <div className={navbarStyles.menu_header}>
        <h1 className={navbarStyles.logo}>artsy.</h1>

        <button
          aria-label='click to close mobile menu'
          aria-pressed='false'
          onClick={handleCloseMenu}
        >
          <img src={closeIcon} role='presentation' />
        </button>
      </div>

      <nav>
        <ul>
          {linkArr.map((navLink) => (
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={navbarStyles.header}>
        <button
          aria-label='click to open mobile menu'
          aria-pressed={isMenuOpen ? 'true' : 'false'}
          onClick={handleOpenMenu}
          className='md:hidden'
        >
          <img src={menuIcon} role='presentation' />
        </button>

        <h1 className={navbarStyles.logo}>arsty.</h1>

        {/* Navigation links for Desktop layout */}

        <nav className='hidden lg:block'>
          <ul className='flex items-center gap-[47px]'>
            {navLinks.map((navLink) => (
              <li
                key={navLink}
                aria-label={`click to go to ${navLink} page`}
                className='capitalize font-satoshi text-2xl'
              >
                {navLink}
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center'>
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

          {/* Bell Icon */}
          <button
            aria-label='click to open view notifications'
            aria-pressed='false'
            className='hidden lg:block'
          >
            <img
              src={bellIcon}
              role='presentation'
              className={navbarStyles.bellIcon}
            />
          </button>
        </div>
      </header>

      {isMenuOpen ? (
        <MobileMenu handleCloseMenu={handleCloseMenu} linkArr={navLinks} />
      ) : null}

      <Outlet />
    </>
  );
};

export default Navbar;
