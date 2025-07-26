import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Page = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split('/')
    .filter(x => x);

  return (
    <div className="routes flex flex-wrap items-center ml-8 mx-4 mb-4 pt-4 pb-4">
      {/* Home Link */}
      <Link to="/" className="text-gray-500 font-semibold flex items-center gap-2">
        Home {pathnames.length > 0 && <ChevronRight />}
      </Link>

      {/* Dynamic Links */}
      {pathnames.map((name, index) => {
        const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={routeTo} className="text-[#FBBB63] font-semibold">{displayName}</span>
        ) : (
          <Link
            key={routeTo}
            to={routeTo}
            className="text-gray-500 font-semibold flex items-center gap-2"
          >
            {displayName} <ChevronRight />
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
