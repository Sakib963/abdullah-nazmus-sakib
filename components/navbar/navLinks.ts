export interface NavLink {
  label: string;
  href: string;
  icon: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#Home", icon: "home" },
  { label: "About", href: "#About", icon: "person" },
  { label: "Services", href: "#Services", icon: "auto_awesome" },
  { label: "Technologies", href: "#Technologies", icon: "memory" },
  { label: "Projects", href: "#Projects", icon: "rocket_launch" },
];

export const contactLink: NavLink = {
  label: "Contact",
  href: "#Contact",
  icon: "send",
};

export const sideNavLinks: NavLink[] = [
  { label: "Home", href: "#Home", icon: "home" },
  { label: "About", href: "#About", icon: "person" },
  { label: "Services", href: "#Services", icon: "construction" },
  { label: "Technologies", href: "#Technologies", icon: "memory" },
  { label: "Projects", href: "#Projects", icon: "work" },
  { label: "Contact", href: "#Contact", icon: "mail" },
];
