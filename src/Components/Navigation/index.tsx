import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { getNextAndPreviousUri } from 'shared/utils/getNextAndPreviousUri';

export interface INavigation {
  hasNavigation: boolean;
  previous?: string;
  previousUrl?: string;
  next?: string;
  nextUrl?: string;
}

export function Navigation() {
  const { pathname } = useLocation();

  const [navigation, setNavigation] = useState<INavigation>({} as INavigation);

  useEffect(() => {
    setNavigation(getNextAndPreviousUri(pathname));
  }, [pathname]);

  return (
    <div>
      {navigation.hasNavigation && (
        <>
          {navigation.previousUrl && (
            <Link to={navigation.previousUrl} className="navigator left-0">
              <FaChevronLeft />{' '}
              <span>{`Dia ${navigation.previous?.replace('/', '01')}`}</span>
            </Link>
          )}
          {navigation.nextUrl && (
            <Link to={navigation.nextUrl} className="navigator right-0">
              <span>{`Dia ${navigation.next?.replace('/', '01')}`}</span>{' '}
              <FaChevronRight />
            </Link>
          )}
        </>
      )}
    </div>
  );
}
