import React from "react";
import { camelize } from "../utils";

import * as appIcons from "../assets/icons";

export const DEFAULT_ICON_SIZE = 16;

// "color" pro[ requires 'currentColor' to be used in the svg fill/stoke properties
const AppIcon = ({ icon, size, color, rounded }) => {
  const iconSize = size ? `${size}px` : `${DEFAULT_ICON_SIZE}px`;

  const selectedIcon = Object.keys(appIcons).find(
    (svgIcon) => svgIcon === camelize(icon),
  );

  if (!selectedIcon) {
    console.error(`Icon "${icon}" not found.`);
    return null;
  }

  const IconComponent = appIcons[selectedIcon];

  return (
    <div
      className={`flex ${rounded ? "app-icon-circle" : ""}`}
      style={{ alignItems: "center" }}
    >
      <IconComponent
        style={{
          height: iconSize,
          width: iconSize,
          color,
        }}
      />
    </div>
  );
};

export default AppIcon;
