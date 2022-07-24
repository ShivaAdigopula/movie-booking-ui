import React from "react";
import { SearchOutlined } from "@material-ui/icons";
export const Search = ({ onChangeValue, onSubmit, onEnter, placeholder }) => {
  let sendValue = (e) => {
    onChangeValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnter();
      // console.log('Enter');
    }
  };

  return (
    <div className="search">
      <div className="search-box">
        <input
          type="text"
          onChange={sendValue}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <button onClick={handleSubmit}>
          <SearchOutlined />{" "}
        </button>
      </div>
    </div>
  );
};
