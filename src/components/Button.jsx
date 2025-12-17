
const Button = ({href, children}) => {
   if (!href) return null;

  return (
    <a 
      href={href}
      className="relative flex items-center justify-center min-h-[60px] px-4 g4 rounded-2xl base-bold uppercase text-white hover:text-grey-50
        transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-brown-200/30 ">
        {children}
    </a>
  )
    
};
 
export default Button;