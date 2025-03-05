"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const navItems = useMemo(() => ["home", "projects", "about", "contact-us"], []);

  // 🔹 Directly initialize active state from URL to prevent flickering
  const initialActive = useMemo(() => {
    const hash = window.location.hash.replace("#", "");
    return navItems.includes(hash) ? hash : "home";
  }, [navItems]);

  const [active, setActive] = useState(initialActive);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.replace("#", "");
      if (navItems.includes(newHash)) {
        setActive(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [navItems]);

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
