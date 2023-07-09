import AppIcon from "./AppIcon";

const AppButton = ({ iconLeft, iconRight, label, ...rest }) => {
  return (
    <button className="app-button" {...rest}>
      {iconLeft && <AppIcon size="14" icon={iconLeft}></AppIcon>}
      {label}
      {iconRight && <AppIcon size="14" icon={iconRight}></AppIcon>}
    </button>
  );
};

export default AppButton;
