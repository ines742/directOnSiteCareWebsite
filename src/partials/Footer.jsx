import { footerLinks } from '../constants';
import copyrightIcon from '../assets/copyright-sign.svg';

const Footer = () => {
  return (
    <footer className='max-container mt-28 bg-gray-100'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col max-lg:items-center py-10 max-lg:mx-4'>
            <div className='flex flex-col items-start lg:pl-48 '>
                <a href='/'>
                <img src="/images/transparentLogoNavbar.png" 
                width={250}
                height={60}
                alt="SkinnyDrip logo"/>
                </a>
                <p className='mt-6 text-base leading-7 sm:max-w-sm '>Our mission is to foster a community where individuals can embrace their best selves with the support of 
                innovative treatments and a dedicated team.</p>
            </div>
            <div className='flex flex-1 justify-between lg:gap-4 gap-20 flex-wrap lg:mr-36 lg:mt-10' >
                {footerLinks.map((section) => (
                    <div key={section.id}>
                        <h4 className='text-brown-600 text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                        <ul>
                            {section.links.map((link) => (
                                <li className='mt-3 text-base leading-normal hover:text-brown-400 cursor-pointer'
                                    key={link.name}>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex justify-between mt-2 max-sm:items-center'>
            <div className='flex flex-1 justify-center items-center gap-2'>
                <img src={copyrightIcon}
                 alt="copy right sign"
                 width={20}
                 height={20}
                 className='rounded-full m-0 bg-black '/>
                 <p>2024 Copyright: SkinnyDRIP</p>

            </div>
        </div>
    </footer>
  )
}

export default Footer;