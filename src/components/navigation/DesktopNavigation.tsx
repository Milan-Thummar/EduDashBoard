import { NavLink } from "react-router-dom";
import Button from "../Button";
import { classNames } from "../../utils/classNames";

export type NavItem = {
  label: string;
  to: string;
};

type Props = {
  items: NavItem[];
  onNavigate: () => void;
  onLogout: () => void;
};

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames("ui-navlink", isActive && "ui-navlink-active");

export default function DesktopNavigation({
  items,
  onNavigate,
  onLogout,
}: Props) {
  return (
    <ul className="hidden items-center gap-6 md:flex" role="list">
      {items.map(({ to, label }) => (
        <li key={to}>
          <NavLink to={to} className={getNavLinkClass} onClick={onNavigate}>
            {label}
          </NavLink>
        </li>
      ))}

      <li>
        <Button variant="primary" ariaLabel="Logout" onClick={onLogout}>
          Logout
        </Button>
      </li>
    </ul>
  );
}
