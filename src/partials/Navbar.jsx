import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { clsx } from "clsx";
import {  navLinks } from "../constants";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 28);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  

  return (
    <header
      className={clsx(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        hasScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-white"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-5">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick}>
          <img
            src="/images/careLogo.png"
            alt="Care Logo"
            className="w-36 object-contain transition-all duration-300 lg:w-44"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-16">
            {navLinks.map((link) => (
             <li key={link.title}>
               {link.path.startsWith("http") ? (
                 <a
                   href={link.path}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="nav-link"
                 >
                   {link.title}
                 </a>
               ) : (
                 <Link
                   to={link.path}
                   onClick={handleLinkClick}
                   className={`nav-link ${isActive(link.path) ? "active" : ""}`}
                 >
                   {link.title}
                 </Link>
               )}
             </li>
           ))}
          </ul>
        </nav>

        {/* Mobile Button */}
        <button
          className="flex size-11 items-center justify-center rounded-full border-2 border-[#85754E] text-[#85754E] transition hover:bg-[#85754E] hover:text-white lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faCircleXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed left-0 top-20 z-40 h-screen w-full bg-white transition-all duration-300 lg:hidden",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex h-full items-start justify-center pt-16">
          <ul className="flex flex-col items-center gap-8 text-xl font-semibold">
           <div
             className={clsx(
               "fixed left-0 top-20 z-40 h-screen w-full bg-white transition-all duration-300 lg:hidden",
               isMenuOpen
                 ? "translate-x-0 opacity-100"
                 : "translate-x-full opacity-0 pointer-events-none"
             )}
           >
             <nav className="flex h-full items-start justify-center pt-16">
               <ul className="flex flex-col items-center gap-8 text-xl font-semibold">
                 {navLinks.map((link) => (
                   <li key={link.path}>
                     {link.path.startsWith("http") ? (
                       <a
                         href={link.path}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="transition-colors duration-300 text-[#002D74] hover:text-[#85754E]"
                         onClick={handleLinkClick}
                       >
                         {link.title}
                       </a>
                     ) : (
                       <Link
                         to={link.path}
                         onClick={handleLinkClick}
                         className={clsx(
                           "transition-colors duration-300",
                           isActive(link.path)
                             ? "text-[#85754E]"
                             : "text-[#002D74] hover:text-[#85754E]"
                         )}
                       >
                         {link.title}
                       </Link>
                     )}
                   </li>
                 ))}
               </ul>
             </nav>
           </div>
          
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;