import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@dulalsandip7950",
  },
  {
    title: "Twitter(X)",
    href: "https://x.com/beingdulal",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/dulalsandip_er/",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/sandip-dulal-er-51542a133/?originalSubdomain=np",
  },
];

export const Footer = () => {
  return (
    <footer className="relative  overflow-x-clip ">
      <div
        className=" absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col gap-8 md:flex-row items-center ">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className=" inline-flex gap-1.5 items-center "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
