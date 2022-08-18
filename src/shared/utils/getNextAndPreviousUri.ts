import { INavigation } from 'Components/Navigation';
import { DAYS } from 'shared/constants';

export function getNextAndPreviousUri(pathname: string): INavigation {
  let hasNavigation = false;
  let current: number | undefined;
  let previous: string | undefined;
  let previousUrl: string | undefined;
  let next: string | undefined;
  let nextUrl: string | undefined;

  const daysQuantity = DAYS.length;

  if (pathname.includes('/days/')) {
    hasNavigation = true;

    current = +pathname.split('/')[2];

    next = current === daysQuantity ? `01` : `${current + 1}`.padStart(2, '0');
    previous = current > 2 ? `${current - 1}`.padStart(2, '0') : '/';

    nextUrl = current === daysQuantity ? '/' : `/days/${next}`;
    previousUrl = current > 2 ? `/days/${previous}` : '/';
  }

  return { hasNavigation, previous, previousUrl, next, nextUrl };
}
