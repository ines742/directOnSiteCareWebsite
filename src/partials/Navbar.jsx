import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { clsx } from "clsx";


const Navbar = () => {
  const location = useLocation();
  // Helper to check if a route is active
  const isActive = (path) => location.pathname === path;
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 28)
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <>
    <div className="nav-ribbon">
     {/* Logo (left on small, centered absolute on lg) */}
     <div className="ribbon-logo lg:order-2">
       <span className="text-3xl lg:text-5xl">SkinnyDRIP</span>
       <span className="text-xs lg:text-sm lg:mt-1">
         710 W. 8th St, Fort Scott,<br className="lg:hidden" /> KS 66701 </span>
     </div>
     {/* Right column (small: email+phone stacked, lg: email only on left) */}
     <div className="ribbon-link-group lg:order-1">
       <a href="mailto:contact@skinny-drip.com" className="ribbon-link">contact@skinny-drip.com</a>
       {/* Phone right on large screens is hidden */}
       <a href="tel:+16206876771" className="ribbon-link lg:hidden">(620)-687-6721</a>
     </div>
      {/* Phone visible on lg */}
      <div className="hidden lg:block lg:order-3">
        <a href="tel:+16206876771" className="ribbon-link">(620)-687-6721</a>
      </div>
    </div>

      {/* Main Navbar */}
      <div className={clsx("fixed left-0 z-50 w-full top-19 transition-all duration-500 max-lg:py-3", hasScrolled && "py2 bg-white backdrop:-blur-[8px]",)} >
        <div className="container flex h-7 lg:h-12 items-center px-5 " >

          <div className={clsx('w-full fixed top-19 left-0 max-lg:bg-white max-lg:opacity-0 ',
            isMenuOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
           
          )}>

            <div className="relative flex flex-col min-h-screen p-8 overflow-hidden sidebar-before lg:min-h-0 lg:p-1 " >
                <nav className="relative z-2 my-auto" >
                    <ul className="lg:flex block px-20 h5">
                        <li className="nav-li">
                            <Link to="/" onClick={handleLinkClick} className={`nav-link ${isActive("/") ? "active" : ""}`} alt="Home-page">Home</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/Esthetics" onClick={handleLinkClick} className={`nav-link ${isActive("/Esthetics") ? "active" : ""}`} alt="Esthetics-page">Esthetics</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/iv-therapy" onClick={handleLinkClick} className={`nav-link ${isActive("/iv-therapy") ? "active" : ""}`}alt="IV Therapy-page">IV Therapy</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/weight-loss" onClick={handleLinkClick} className={`nav-link ${isActive("/weight-loss") ? "active" : ""}`} alt="Weight-loss">Weight Loss</Link>
                        </li>
                        <li className="nav-li">
                            <Link to="/about" onClick={handleLinkClick} className={`nav-link ${isActive("/about") ? "active" : ""}`} alt="About-page">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
        </div>
        {/* Hamburger menu button - visible on small screens */}
        <button className="lg:hidden absolute right-4 top-2 z-50 size-10 border-2 border-brown-400 rounded-full flex justify-center items-center "
          onClick={() => setIsMenuOpen((prevState) => !prevState)} >
            <FontAwesomeIcon icon={isMenuOpen ? faCircleXmark : faBars } 
            alt="menu" 
            className="size-1/2 object-contain text-brown-400"/>
        </button>
      </div>
    </>
  );
};

export default Navbar;