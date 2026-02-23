import { NavLink } from "react-router-dom";
import Button from "../Button";
import type { NavItem } from "./DesktopNavigation";
import { classNames } from "../../utils/classNames";

type Props = {
  items: NavItem[];
  open: boolean;
  onNavigate: () => void;
  onLogout: () => void;
};

const getMobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(
    "block w-full rounded-md px-4 py-3 text-base font-semibold transition",
    "text-color-nav-item",
    "hover:text-color-nav-item-active hover:bg-color-background-muted",
    isActive && "text-color-nav-item-active"
  );

export default function MobileNavigation({
  items,
  open,
  onNavigate,
  onLogout,
}: Props) {
  const mobileMenuClass = classNames(
    "md:hidden absolute left-0 right-0 z-[60] top-[calc(4rem+1px)]",
    "transition-all duration-300 ease-out",
    open
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-2 pointer-events-none"
  );

  return (
    <div
      id="mobile-menu"
      className={mobileMenuClass}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!open}
    >
      <div className="border-b border-color-border-default bg-color-background-card shadow-lg rounded-b-lg">
        <div className="ui-container py-4">
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-2" role="list">
              {items.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={onNavigate}
                    className={getMobileLinkClass}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 mb-2">
            <Button
              variant="primary"
              ariaLabel="Logout"
              fullWidth
              onClick={onLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
