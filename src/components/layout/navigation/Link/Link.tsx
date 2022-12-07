import { Link as RouterLink } from 'react-router-dom';

import arrowRightIcon from '@/assets/icons/chevron/icon-arrow-right.svg';

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
        className='flex items-center justify-between border-b border-black px-2 py-4'
      >
        <h3 className='font-satoshi font-medium text-2xl'>{children}</h3>

        <img
          src={arrowRightIcon}
          role='presentation'
          className='w-[54px] mr-7'
        />
      </div>
    </RouterLink>
  );
};

export default Link;
