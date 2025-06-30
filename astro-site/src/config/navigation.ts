export interface NavigationLink {
  href: string;
  label: string;
  mobileIcon?: string;
  className?: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    href: "/",
    label: "Home",
    mobileIcon: "🏠"
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    mobileIcon: "📁"
  },
  {
    href: "/services",
    label: "Services",
    mobileIcon: "⚡"
  },
  {
    href: "/about",
    label: "About",
    mobileIcon: "👋"
  },
  {
    href: "/contact",
    label: "Contact",
    mobileIcon: "📞"
  }
];

export const brandConfig = {
  name: "Austin Media Co.",
  href: "/"
};