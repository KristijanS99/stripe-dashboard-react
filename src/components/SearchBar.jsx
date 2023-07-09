import React, { useState } from "react";
import AppIcon from "./AppIcon";
import { APP_ICONS } from "../assets/icons";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex" style={{ gap: 8 }}>
        <AppIcon size={12} icon={APP_ICONS.Search} />
        <input
          type="text"
          placeholder="Search..."
          className={"text-body-medium search-bar"}
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;
