import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-2 border-orange-primary flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/LogoLetters.png" alt="Logo" width={74} height={29} />
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
      </Link>
    </nav>
  );
};

export default Navbar;
