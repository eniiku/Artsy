import closeIcon from '@/assets/icons/navigation/icon-close.svg';
import chatIcon from '@/assets/icons/navigation/icon-chat.svg';

interface MenuProps {
  linkArr: string[];
  handleCloseMenu: () => void;
  styles: {
    header: string;
    logo: string;
    searchIcon: string;
    cartIcon: string;
    bellIcon: string;
    menu: string;
    menu_header: string;
    navLink: string;
    chatIcon: string;
  };
}

const Menu = (props: MenuProps) => {
  const { linkArr, handleCloseMenu, styles } = props;

  return (
    <div className={styles.menu}>
      <div className={styles.menu_header}>
        <h1 className={styles.logo}>artsy.</h1>

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
              className={styles.navLink}
              aria-label={`click to go to ${navLink} page`}
            >
              {navLink}
            </li>
          ))}
        </ul>
      </nav>

      <button className={styles.chatIcon} aria-pressed='false'>
        <img src={chatIcon} role='presentation' />
      </button>
    </div>
  );
};

export default Menu;
