import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

import bellIcon from '@/assets/icons/navigation/icon-bell.svg';
import cartIcon from '@/assets/icons/navigation/icon-cart.svg';
import menuIcon from '@/assets/icons/navigation/icon-menu.svg';
import searchIcon from '@/assets/icons/navigation/icon-search.svg';
import Menu from './MobileMenu/Menu';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { page: 'home', url: '/' },
  { page: 'auctions', url: '/auctions' },
  { page: 'marketplace', url: '/marketplace' },
  { page: 'drops', url: '/drops' },
];

const navbarStyles = {
  header:
    'flex items-center justify-between py-7 lg:py-12 relative px-3 lg:px-32',
  logo: 'font-stix font-bold text-2xl lg:text-[32px] uppercase text-dark text-dark_gray_clr-700',
  searchIcon: 'w-[28px] lg:w-[48px]',
  cartIcon: 'w-[31px] lg:w-[49px]',
  bellIcon: 'w-[46px]',
  menu: 'fixed inset-0 z-30 bg-white px-6 py-8',
  menu_header: 'flex items-center justify-between',
  navLink:
    'text-dark_gray_clr-200 font-smatoshi font-medium text-2xl capitalize my-[50px]',
  chatIcon: 'absolute bottom-8 right-3',
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const { cartItems } = useCart();

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
                key={navLink.url}
                aria-label={`click to go to ${navLink} page`}
                className='capitalize font-satoshi text-2xl'
              >
                <NavLink to={navLink.url}>{navLink.page}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center'>
          {/* searchIcon */}

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

          {/* Cart Icon */}

          <button
            aria-label='click to open view products in cart'
            aria-pressed='false'
            className='relative'
          >
            <NavLink to={cartItems.length > 0 ? 'marketplace/cart' : ''}>
              <img
                src={cartIcon}
                role='presentation'
                className={navbarStyles.cartIcon}
              />
              {cartItems.length > 0 ? (
                <div className='bg-red_clr w-1 h-1 lg:w-[6px] lg:h-[6px] rounded-full absolute z-30 top-1 right-1 lg:right-2'></div>
              ) : null}
            </NavLink>
          </button>

          {/* Bell Icon */}

          <button
            aria-label='click to open view notifications'
            aria-pressed='false'
            className='hidden lg:block relative'
          >
            <NavLink to='/drops'>
              <img
                src={bellIcon}
                role='presentation'
                className={navbarStyles.bellIcon}
              />
              <div className='bg-red_clr w-[6px] h-[6px] rounded-full absolute z-30 top-1 right-2'></div>
            </NavLink>
          </button>
        </div>
      </header>

      {isMenuOpen ? (
        <Menu
          handleCloseMenu={handleCloseMenu}
          linkArr={navLinks}
          styles={navbarStyles}
        />
      ) : null}

      <Outlet />
    </>
  );
};

export default Navbar;
