import outlinedCloseIcon from '@/assets/icons/product/icon-close-outline.svg';
import { useCart } from '@/context/CartContext';
import productData from '@/data/products.json';

interface CartItemProps {
  id: string;
  quantity: number;
}

const CartItem = (props: CartItemProps) => {
  const { id, quantity } = props;

  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useCart();

  const item = productData.products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className='flex gap-8 lg:border-t-[0.3px] lg:border-[#747474] lg:pt-14'>
      <div className='max-h-[125px] max-w-[125px] lg:max-h-[200px] lg:max-w-[210px] bg-slate-400'>
        <img
          src={item.url}
          alt=' '
          className='h-[125px] w-[125px] lg:h-[200px] lg:w-[210px] object-cover object-center'
        />
      </div>

      <div className='font-satoshi flex flex-col justify-between lg:flex-grow'>
        <h4 className='font-cardo italic text-light_gray_clr-700 lg:hidden'>
          Editorals
        </h4>

        <h1 className='font-bold text-[22px] lg:text-2xl text-dark_gray_clr-200 capitalize'>
          {item.name}
        </h1>

        <h4 className='hidden lg:block text-2xl text-[#888888] capitalize'>
          {item.creator}
        </h4>

        <h5 className='hidden lg:block text-[#888888] text-xl'>
          Size:{' '}
          <span className='text-dark_gray_clr-200'>{`${item.size.ft}ft`}</span>
        </h5>

        <div className='border-[0.5px] border-black lg:border-none rounded-full grid grid-cols-3 lg:w-fit'>
          <button
            onClick={() => decreaseCartQuantity(id)}
            className='py-1 px-4 font-medium text-xl lg:text-[32px] lg:px-0 lg:py-0 text-left'
          >
            -
          </button>
          <h3 className='border-x-[0.2px] border-black py-1 px-4 font-medium text-xl lg:text-[32px] lg:py-0 lg:px-4 lg:border-none'>
            {quantity}
          </h3>
          <button
            onClick={() => increaseCartQuantity(id)}
            className='py-1 px-4 font-medium text-xl lg:text-[32px] lg:px-0 lg:py-0 lg:text-right'
          >
            +
          </button>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center'>
        <button onClick={() => removeFromCart(id)}>
          <img
            src={outlinedCloseIcon}
            alt=' '
            role='presentation'
            className='w-10 h-10'
          />
        </button>

        <h2 className='font-cardo font-bold text-2xl text-dark_gray_clr-300 lg:text-4xl'>
          {`$${item.price.usd}`}
        </h2>
      </div>
    </div>
  );
};

export default CartItem;
