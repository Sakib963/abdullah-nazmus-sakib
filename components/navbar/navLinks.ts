export interface NavLink {
  label: string;
  href: string;
  icon: string;
  isPage?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Home",         href: "/#Home",         icon: "home" },
  { label: "About",        href: "/#About",        icon: "person" },
  { label: "Services",     href: "/#Services",     icon: "handyman" },
  { label: "Skills",       href: "/#Skills",       icon: "bar_chart" },
  { label: "Projects",     href: "/#Projects",     icon: "rocket_launch" },
  { label: "Blog",         href: "/#Blogs",        icon: "article" },
];

export const contactLink: NavLink = {
  label: "Contact",
  href: "/#Contact",
  icon: "send",
};

export const sideNavLinks: NavLink[] = [
  { label: "Home",         href: "/#Home",         icon: "home" },
  { label: "About",        href: "/#About",        icon: "person" },
  { label: "Services",     href: "/#Services",     icon: "handyman" },
  { label: "Skills",       href: "/#Skills",       icon: "bar_chart" },
  { label: "Projects",     href: "/#Projects",     icon: "work" },
  { label: "Blog",         href: "/#Blogs",        icon: "article" },
  { label: "Contact",      href: "/#Contact",      icon: "mail" },
];
