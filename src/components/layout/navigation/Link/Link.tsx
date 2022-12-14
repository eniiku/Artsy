import { Link as RouterLink } from 'react-router-dom';

import arrowRightIcon from '@/assets/icons/chevron/icon-arrow-right.svg';
import RightIcon from '../../../../assets/icons/chevron/icon-arrow-right-outlined.svg';

interface LinkProps {
  children: string;
  url: string;
}

const Link = (props: LinkProps) => {
  const { children, url } = props;

  return (
    <RouterLink to={url}>
      <div
        aria-label={`click to ${children}.`}
        className='flex items-center justify-between border-b border-black px-2 py-4
        lg:border-dark_gray_clr-200 lg:px-12 lg:py-8 lg:border-b-0 lg:border-t'
      >
        <h3 className='font-satoshi font-medium text-2xl lg:text-5xl'>
          {children}
        </h3>

        <img
          src={arrowRightIcon}
          role='presentation'
          className='w-[54px] mr-7 lg:hidden'
        />

        <img
          src={RightIcon}
          role='presentation'
          className='hidden lg:block mr-44'
        />
      </div>
    </RouterLink>
  );
};

export default Link;
