import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extracts the current pathname (e.g., "/collections/1")
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the pathname changes, scroll to the top left of the window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'smooth' will animate the scroll, 'instant' is immediate
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;