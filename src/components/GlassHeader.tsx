import ThemeToggle from "./ui/theme-toggle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {["skills", "projects", "education"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item === "skills" && "🛠️ "}
              {item === "projects" && "🚀 "}
              {item === "education" && "🎓 "}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex space-x-2 text-sm font-medium text-foreground/60">
          <a href="/" className="hover:text-foreground">
            한국어
          </a>
          <a href="/jp/" className="hover:text-foreground">
            日本語
          </a>
          <a href="/en/" className="hover:text-foreground">
            English
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 px-4 border-t border-border/10 backdrop-blur-md backdrop-filter bg-background/80 dark:bg-background/40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {["skills", "projects", "education"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                  onClick={toggleMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {item === "skills" && "🛠️ "}
                  {item === "projects" && "🚀 "}
                  {item === "education" && "🎓 "}
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </nav>
            <div className="flex space-x-4 justify-center mt-4 text-sm font-medium text-foreground/60">
              <a href="/" className="hover:text-foreground">
                🇰🇷
              </a>
              <a href="/jp/" className="hover:text-foreground">
                🇯🇵
              </a>
              <a href="/en/" className="hover:text-foreground">
                🇺🇸
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
