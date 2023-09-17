import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="logo" height={29} width={130} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 bg-red-600 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
