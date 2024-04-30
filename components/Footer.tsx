import { FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 bg-blue-primary">
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap gap-10 sm:justify-around md:flex-1">
          {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
              <ul className="regular-14 flex flex-col gap-4 text-white">
                {columns.links.map((link) => (
                  <Link href="/" key={link}>
                    {link}
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          ))}

          <FooterColumn title="Suivez-nous !" key="index">
            {SOCIALS.map((network, index) => (
              <ul className="regular-14 flex flex-col gap-4 text-white">
                <a href={network.link} key={network.link} target="_blank">
                  <Image
                    src={network.icon}
                    alt={network.title}
                    width={network.size}
                    height={network.size}
                  />
                </a>
              </ul>
            ))}
          </FooterColumn>
        </div>

        <div className="flex border-t-2 border-white items-center justify-between text-white mt-5">
          <Link href="/" className="mb-10">
            <Image
              src="/logoTitreWhite.svg"
              alt="logo"
              width={300}
              height={200}
              className="pl-4"
            />
          </Link>
          <p className="mr-10">2024 Virtual Sentinel. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-white">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
