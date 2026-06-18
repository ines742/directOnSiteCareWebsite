import { footerLinks } from "../constants";
import copyrightIcon from "../assets/copyright-sign.svg";

const Footer = () => {
  return (
    <footer className="mt-28 bg-[#f4f7fc] text-black">
      <div className="container mx-auto px-5 pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Logo + Description */}
          <div>
            <a href="/">
              <img
                src="/images/careLogo.png"
                width={250}
                height={60}
                alt="Direct Onsite Care logo"
                className="mb-6"
              />
            </a>

            <p className="max-w-md leading-7 text-black/80">
              Direct Onsite Care provides convenient workplace healthcare
              solutions that help employers reduce costs, support employee
              wellness, and improve productivity.
            </p>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#85754E]" />
          </div>

          {/* Footer Links */}
          <div className="grid gap-10 sm:grid-cols-2">
            {footerLinks.map((section) => (
              <div key={section.id}>
                <h4 className="mb-5 text-xl font-semibold text-[#85754E]">
                  {section.title}
                </h4>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.link ? (
                        <a
                          href={link.link}
                          target={link.link.startsWith("http") ? "_blank" : undefined}
                          rel={link.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-black/80 transition hover:text-[#85754E]"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <span className="text-black/80">{link.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-black/15 pt-2">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-black/70 md:flex-row">
            <div className="flex items-center gap-2">
              <img
                src={copyrightIcon}
                alt="copyright sign"
                width={18}
                height={18}
                className="rounded-full bg-brown-200 p-0.5"
              />
              <p>2026 Direct Onsite Care. All rights reserved.</p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;