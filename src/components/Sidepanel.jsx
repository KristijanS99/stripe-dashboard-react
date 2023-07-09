import MenuLink from "./MenuLink";
import { APP_ICONS } from "../assets/icons";

const Sidepanel = ({ activeMenu, handleSetActiveMenu }) => {
  const DEFAULT_MENU_LINK_STYLE = {
    marginBottom: 12,
  };

  return (
    <div className="app-sidepanel">
      {menuLinks.map((menuLink, index) => (
        <MenuLink
          key={index}
          onClick={() =>
            menuLink.disabled ? null : handleSetActiveMenu(index)
          }
          style={menuLink.style ?? DEFAULT_MENU_LINK_STYLE}
          active={activeMenu === index}
          {...menuLink}
        />
      ))}
    </div>
  );
};

export default Sidepanel;

const menuLinks = [
  {
    label: "Store name",
    iconLeft: APP_ICONS.Store,
    iconRight: APP_ICONS.Chevron,
    main: true,
    iconLeftRounded: true,
    style: {
      marginBottom: "36px",
    },
    disabled: true,
  },
  {
    label: "Home",
    iconLeft: APP_ICONS.Home,
  },
  {
    label: "Payments",
    iconLeft: APP_ICONS.Payments,
  },
  {
    label: "Balances",
    iconLeft: APP_ICONS.Balances,
  },
  {
    label: "Customers",
    iconLeft: APP_ICONS.Customers,
  },
  {
    label: "Connected accounts",
    iconLeft: APP_ICONS.ConnectedAccounts,
  },
  {
    label: "Products",
    iconLeft: APP_ICONS.Products,
  },
  {
    label: "Reports",
    iconLeft: APP_ICONS.Reports,
    style: {
      marginBottom: 28,
    },
  },
  {
    label: "Developers",
    iconLeft: APP_ICONS.Developers,
  },
  {
    label: "View test data",
    showToggle: true,
    disabled: true,
  },
  {
    label: "Settings",
    iconLeft: APP_ICONS.Settings,
  },
];
