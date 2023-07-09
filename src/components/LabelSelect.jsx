import AppIcon from "./AppIcon";
import { APP_ICONS } from "../assets/icons";

const LabelSelect = ({ label }) => {
  return (
    <div
      className="text-body-medium flex items-center"
      style={{ color: "var(--grey-700)", gap: 6 }}
    >
      {label}
      <AppIcon icon={APP_ICONS.Chevron} />
    </div>
  );
};

export default LabelSelect;
