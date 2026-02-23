import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import DesktopNavigation, {
  type NavItem,
} from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import { classNames } from "../utils/classNames";

const navItems: NavItem[] = [
  { label: "Dashboard", to: "/" },
  { label: "My Courses", to: "/my-courses" },
  { label: "Profile", to: "/profile" },
  { label: "Settings", to: "/settings" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  const handleLogout = () => {
    closeMenu();
    alert("Logged Out");
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const headerClass = classNames(
    "sticky top-0 z-50 border-b border-color-border-default shadow-xs transition-colors",
    open
      ? "bg-color-background-card"
      : "bg-color-background-default/80 backdrop-blur"
  );

  const backdropClass = classNames(
    "md:hidden fixed inset-x-0 bottom-0 top-16 z-[40]",
    "bg-black transition-opacity duration-300",
    open ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
  );

  return (
    <>
      <header className={headerClass}>
        <nav
          className="ui-container flex h-16 items-center justify-between"
          aria-label="Primary"
        >
          <div className="flex items-center gap-3">
            <a
              href="#main"
              className={classNames(
                "sr-only focus:not-sr-only",
                "ui-btn ui-btn-outline px-3 py-1 text-sm rounded-sm"
              )}
            >
              Skip navigation
            </a>

            <NavLink
              to="/"
              className="flex items-center"
              aria-label="Go to dashboard"
              onClick={closeMenu}
            >
              <img src={logo} alt="EduDashboard" className="h-12 w-auto" />
            </NavLink>
          </div>

          <DesktopNavigation
            items={navItems}
            onNavigate={closeMenu}
            onLogout={handleLogout}
          />

          <button
            className={classNames(
              "md:hidden inline-flex size-10 items-center justify-center rounded-full",
              "hover:bg-color-background-muted transition",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-color-background-page"
            )}
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            type="button"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        <MobileNavigation
          items={navItems}
          open={open}
          onNavigate={closeMenu}
          onLogout={handleLogout}
        />
      </header>

      <div
        className={backdropClass}
        onClick={closeMenu}
        aria-hidden="true"
        role="presentation"
      />
    </>
  );
}
