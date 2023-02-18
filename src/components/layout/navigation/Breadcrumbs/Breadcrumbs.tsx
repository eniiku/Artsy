import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const routes = [
  { path: '/users/:userId', breadcrumb: 'Example 1' },
  { path: '/data', breadcrumb: 'Example 2' },
];

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    <nav className='font-satoshi font-medium lg:text-2xl'>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link
          key={match.pathname}
          to={match.pathname}
          className={
            match.pathname === location.pathname
              ? 'text-black mr-2 lg:mr-2'
              : 'text-[#BCB7B7] mr-2 lg:mr-1'
          }
        >
          {breadcrumb}/
        </Link>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
