import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

 // Scroll to the top of the page when route change
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}