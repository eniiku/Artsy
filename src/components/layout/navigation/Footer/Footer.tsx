import mailIcon from '@/assets/icons/footer/icon-mail.svg';
import markerIcon from '@/assets/icons/footer/icon-marker.svg';

const Footer = () => {
  return (
    <section aria-label='subscribe to our daily newsletter'>
      <h1>newsletter</h1>

      <p>SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS</p>

      <form>
        <label htmlFor='newsletter'>enter your email here</label>
        <input type='search' name='newsletter' />

        <button>subscribe</button>
      </form>

      <div>
        <h3>reach us</h3>

        <div>
          <div>
            <img src={mailIcon} role='presentation' />

            <p>artsystudios@gmail.com</p>
          </div>

          <div>
            <img src={markerIcon} role='presentation' />

            <p>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
