import React from "react";

const SortList = () => {
  return (
    <div>
      <select name="sortList">
        <option value="">Sort by</option>
        <option value="">Price: High-Low</option>
        <option value="">Price: Low-High</option>
        <option value="">Newest</option>
        <option value="">Oldest</option>
      </select>
    </div>
  );
};

export default SortList;
