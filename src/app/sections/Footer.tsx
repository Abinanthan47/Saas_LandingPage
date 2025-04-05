import { Sparkles } from "@/components/ui/sparkles";
import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Link {
  text: string;
  href: string;
}

interface Column {
  title: string;
  links: Link[];
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

interface FooterColumnProps {
  title: string;
  links: Link[];
}

// Change this with your own data
const footerData = {
  brandName: "Abinanthan",
  columns: [
    {
      title: "About Us",
      links: [
        { text: "Our Story", href: "#" },
        { text: "Leadership", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Press", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Consulting", href: "#" },
        { text: "Development", href: "#" },
        { text: "Design", href: "#" },
        { text: "Support", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "#" },
        { text: "Webinars", href: "#" },
        { text: "Case Studies", href: "#" },
        { text: "Documentation", href: "#" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { text: "Sales", href: "#" },
        { text: "Support", href: "#" },
        { text: "General Inquiries", href: "#" },
        { text: "Feedback", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { href: "https://x.com/Abinanthan24", icon: <Twitter size={20} /> },
    { href: "https://facebook.com", icon: <Facebook size={20} /> },
    { href: "https://youtube.com", icon: <Youtube size={20} /> },
    { href: "https://linkedin.com/in", icon: <Linkedin size={20} /> },
    { href: "https://github.com/Abinanthan47", icon: <Github size={20} /> },
  ],
};

const FooterLink = ({ href, children, target, rel }: FooterLinkProps) => (
  <a
    href={href}
    className="text-white/80 hover:text-gray-600 text-sm"
    target={target}
    rel={rel}
  >
    {children}
  </a>
);

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="flex flex-col space-y-2">
    <h3 className="text-white font-semibold mb-1">{title}</h3>
    {links.map((link, index) => (
      <FooterLink key={index} href={link.href}>
        {link.text}
      </FooterLink>
    ))}
  </div>
);

const Footer = () => {
  const { brandName, columns, socialLinks } = footerData;

  return (
    <footer className="bg-background relative py-8 px-6 text-white">
      <div className="absolute top-0 left-32  right-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#6C2ECC] to-transparent"></div>
      <div className="max-w-7xl mx-auto mt-8">
        <Sparkles
          density={100}
          size={1}
          direction="bottom"
          className="absolute inset-x-0 top-0 h-full w-full  [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <Image
              src={"../assets/logo.svg"}
              alt="logo"
              width={30}
              height={30}
              className="bg-[#8338EB] h-12 w-12 rounded-xl border-2 border-purple-300 p-2"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-14 xl:gap-16 mb-3">
            {columns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        {/* Centered Brand Name, Year, and Icons */}
        <div className=" pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:justify-between">
            <div className="text-sm text-white">
              © {new Date().getFullYear()} {brandName}, Inc.
            </div>
            <div className="flex space-x-4 md:space-x-6">
              {socialLinks.map((social, index) => (
                <FooterLink
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
