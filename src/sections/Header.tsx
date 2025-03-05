"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  // Define navItems outside the component
  const navItems = ["home", "projects", "about", "contact-us"];

  // Set initial active state as null
  const [active, setActive] = useState<string | null>(null);

  // Track loading state (prevents render before hash is determined)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize the active state based on the URL hash or default to "home"
      const hash = window.location.hash.replace("#", "") || "home";
      setActive(hash);

      // Handle hash changes (when the user clicks on links or URL hash changes)
      const handleHashChange = () => {
        const newHash = window.location.hash.replace("#", "");
        setActive(newHash);
      };

      // Listen for hash change events
      window.addEventListener("hashchange", handleHashChange);

      // Turn off loading state once active state is set
      setIsLoading(false);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []); // Empty dependency array ensures effect runs once

  // Prevent rendering if the state is still loading
  if (isLoading || active === null) return null;

  return (
    <div className="flex justify-center md:px-48 items-center fixed top-3 w-full z-10">
      <nav className="relative flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative nav-item px-4 py-2 transition-colors duration-200"
            onClick={() => setActive(item)}
          >
            {active === item && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-white rounded-full z-[-1]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                active === item ? "text-gray-900" : "text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};
