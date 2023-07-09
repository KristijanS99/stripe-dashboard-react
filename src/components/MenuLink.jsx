import AppIcon from "./AppIcon";
import "react-toggle/style.css"; // for ES6 modules
import Toggle from "react-toggle";

const AppButton = ({
  iconLeft,
  iconLeftRounded,
  iconRight,
  label,
  main,
  active,
  showToggle,
  ...rest
}) => {
  return (
    <button
      className={`menu-link ${main ? "text-heading-medium" : "text-regular"}  ${
        active ? "semi-bold text-active" : ""
      }`}
      {...rest}
    >
      {showToggle && <Toggle icons={false} className="app-toggle" />}
      {iconLeft && (
        <AppIcon
          color={active ?? "--active"}
          rounded={iconLeftRounded}
          size="16"
          icon={iconLeft}
        ></AppIcon>
      )}
      {label}
      {iconRight && <AppIcon size="16" icon={iconRight}></AppIcon>}
    </button>
  );
};

export default AppButton;
