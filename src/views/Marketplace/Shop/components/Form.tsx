import MarketItem from '../../MarketItem/MarketItem';

const Form = () => {
  return (
    <form>
      {/* Email Section */}
      <div className='form-container'>
        <label htmlFor='email' className='form-label'>
          Your email
        </label>

        <div>
          <input
            type='text'
            id='email'
            className='form-input mb-2'
            placeholder='aanuoluwateenah@gmail.com'
          />

          {/* TODO: import tailwind form plugin to style checkbox */}
          <input
            type='checkbox'
            id='email-newsletter'
            className='mr-2 checked:bg-light_gray_clr-600 text-light_gray_clr-600 rounded-[5px]'
          />
          <label
            htmlFor='email-newsletter'
            className='font-satoshi text-[13px] text-[#747474]}'
          >
            Get updates about new drops & exclusive offers
          </label>
        </div>
      </div>

      {/* TODO:  style select */}
      {/* Wallet / City / Country Section */}
      {[
        { text: 'choose a wallet', id: 'wallet' },
        { text: 'city', id: 'city' },
        { text: 'country', id: 'country' },
      ].map((item) => (
        <div key={item.text} className='form-container'>
          <label htmlFor={item.id} className='form-label'>
            {item.text}
          </label>

          <select id={item.id} className='form-input'>
            <option value='initial' selected>
              {' '}
            </option>
            <option value='city1'>Lagos</option>
            <option value='city2'>Ogun</option>
            <option value='city3'>Abuja</option>
          </select>
        </div>
      ))}

      {/* Postal Code & Phone Number Section */}
      {[
        { text: 'postal code', id: 'postal' },
        { text: 'phone number', id: 'phone' },
      ].map((item) => (
        <div key={item.text} className='form-container'>
          <label htmlFor={item.id} className='form-label'>
            {item.text}
          </label>
          <input type='text' id={item.id} className='form-input' />
        </div>
      ))}
    </form>
  );
};

export default Form;
