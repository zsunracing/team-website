import { getPermalink } from "./utils/permalinks";

export const headerData = {
  links: [
    { text: "Home", href: getPermalink("/") },
    { text: "Ride", href: getPermalink("/ride") },
    { text: "Race", href: getPermalink("/race") },
    { text: "Coaching", href: getPermalink("/coaching") },
    { text: "Resources", href: getPermalink("/resources") },
    { text: "Join", href: getPermalink("/join") },
    { text: "About", href: getPermalink("/about") },
    { text: "Contact", href: getPermalink("/contact") },
  ],
  actions: [{ text: "Join ZSUN", href: getPermalink("/join") }],
};

export const footerData = {
  links: [
    {
      title: "Club",
      links: [
        { text: "Ride with us", href: getPermalink("/ride") },
        { text: "Race with us", href: getPermalink("/race") },
        { text: "Join ZSUN", href: getPermalink("/join") },
        { text: "Contact", href: getPermalink("/contact") },
      ],
    },
    {
      title: "Performance",
      links: [
        { text: "Coaching & tools", href: getPermalink("/coaching") },
        { text: "Rider resources", href: getPermalink("/resources") },
        {
          text: "Performance Hub",
          href: "https://zsun-performance-hub.lalieustewart.workers.dev",
        },
      ],
    },
    {
      title: "Community",
      links: [
        { text: "About ZSUN", href: getPermalink("/about") },
        { text: "Discord", href: "https://zsunr.com/discord" },
        { text: "Zwift Club", href: "https://www.zwift.com/clubs/ZSUN/home" },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") },
  ],
  socialLinks: [
    {
      ariaLabel: "Discord",
      icon: "tabler:brand-discord",
      href: "https://zsunr.com/discord",
    },
  ],
  footNote: "Copyright &copy; 2026 ZSUN. Ride. Race. Improve. Belong.",
};
