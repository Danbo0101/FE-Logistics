import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    console.log(pathname)

    useEffect(() => {
        console.log("1")
        document.body.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}

export default ScrollToTop;
