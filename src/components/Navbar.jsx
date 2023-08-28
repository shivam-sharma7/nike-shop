import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <header className="absolute z-10 py-8 w-full padding-x">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
          src={headerLogo}
          alt="Logo"
          width={125}
          height={29} />
        </a>
        <ul className="flex flex-1 gap-16 justify-end items-center mr-32 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg font-semibold leading-normal font-montserrat hover:underline text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
            <img 
            src={hamburger}
            alt="Humberger" 
            width={25}
            height={25}
            />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
