import { useParams } from 'react-router-dom';

import styles from '@/styles';
import ethIcon from '@/assets/icons/product/ethereum.svg';
import likeIcon from '@/assets/icons/product/icon-like.svg';
import chevronDownIcon from '@/assets/icons/chevron/icon-chevron-down-outlined.svg';
import MarketItem from '../MarketItem/MarketItem';

const MarketItemDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div className='mt-4 mb-3'>breadcrumbs</div>

      {/* Product Details */}

      <div className={`${styles.xPadding}`}>
        <div>
          <MarketItem />

          <div>
            <ul>
              <li>
                Creator: <span>Ali Dawa</span>
              </li>

              <li>Made in Italy</li>

              <li>Total views:1.7k</li>

              <li>
                <button>-</button>

                <h3>1</h3>

                <button>+</button>
              </li>
            </ul>

            <div>
              <button>add to cart</button>

              <button>
                <img src={likeIcon} role='presentation' />
              </button>
            </div>
          </div>
        </div>

        <div>
          {['description', 'listings', 'status'].map((item) => (
            <div key={item}>
              {item}
              <img src={chevronDownIcon} role='presentation' />
            </div>
          ))}
        </div>
      </div>

      {/* Explore more */}

      <div>More from this collection</div>

      {/* featured explore products */}

      <div>
        <div>
          <img src={likeIcon} role='presentation' />
          <div></div>
          <div>
            <h3>sassy</h3>

            <h3>
              <img src={ethIcon} role='presentation' />
              3.20
            </h3>
          </div>
        </div>
      </div>

      {/* explore all button
       */}
      <div className='hidden lg:block'>
        <button>Explore all</button>
      </div>
    </div>
  );
};

export default MarketItemDetails;
