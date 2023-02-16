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
            className='form-input mb-2 lg:mb-4'
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
            className='font-satoshi text-[13px] text-[#747474] lg:text-xl'
          >
            Get updates about new drops & exclusive offers
          </label>
        </div>
      </div>

      {/* Name Section */}

      <div className='hidden lg:block'>
        <div className='form-container'>
          <label htmlFor='name' className='form-label'>
            your full name
          </label>

          <input
            type='text'
            id='name'
            placeholder='Anuoluwapo Bamisaye'
            className='form-input'
          />
        </div>
      </div>

      {/* TODO:  style select */}
      {/* Wallet / City / Country Section MOBILE */}
      {[
        { text: 'choose a wallet', id: 'wallet' },
        { text: 'city', id: 'city' },
        { text: 'country', id: 'country' },
      ].map((item) => (
        <div key={item.text} className='form-container lg:hidden'>
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

      {/* Wallet / City Section DESKTOP */}
      <div className='hidden lg:block'>
        {[
          { text: 'choose a wallet', id: 'wallet' },
          { text: 'city', id: 'city' },
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
      </div>

      {/* DESKTOP Country/ Postal Code Section */}

      <div className='hidden lg:grid grid-cols-2 items-center gap-12'>
        <div className='form-container'>
          <label htmlFor='country' className='form-label'>
            country
          </label>

          <select id='country' className='form-input'>
            <option value='initial' selected>
              {' '}
            </option>
            <option value='city1'>Lagos</option>
            <option value='city2'>Ogun</option>
            <option value='city3'>Abuja</option>
          </select>
        </div>

        <div className='form-container'>
          <label htmlFor='postal' className='form-label'>
            postal code
          </label>
          <input
            type='text'
            id='postal'
            className='form-input'
            placeholder='001001'
          />
        </div>
      </div>

      {/* Postal Code & Phone Number Section */}
      <div className='lg:hidden'>
        {[
          { text: 'postal code', id: 'postal', placeholder: '001001' },
          { text: 'phone number', id: 'phone', placeholder: '0812 3456 785' },
        ].map((item) => (
          <div key={item.text} className='form-container'>
            <label htmlFor={item.id} className='form-label'>
              {item.text}
            </label>
            <input
              type='text'
              id={item.id}
              className='form-input'
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>

      {/* Phone number Section */}
      <div className='hidden lg:block'>
        <div className='form-container'>
          <label htmlFor='phone' className='form-label'>
            phone number
          </label>
          <input
            type='text'
            id='phone'
            className='form-input'
            placeholder='0812 3456 785'
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
