import React, { useState, useEffect } from "react";

const SortList = ({ filteredValues, setFilteredValues }) => {
  const [selected, setSelected] = useState("");

  const setSortList = (e) => {
    let items = [...filteredValues];

    if (e === "high") {
      items.sort((a, b) => {
        return b.retailPrice - a.retailPrice;
      });
    } else if (e === "low") {
      items.sort((a, b) => {
        return a.retailPrice - b.retailPrice;
      });
    }

    setFilteredValues([...items]);
  };

  useEffect(() => {
    if (selected !== "") {
      setSortList(selected);
    }
  }, [selected]);

  return (
    <div>
      <select
        name="sortList"
        defaultValue=""
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <option value="">Sort by</option>
        <option value="high">Price: High-Low</option>
        <option value="low">Price: Low-High</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default SortList;
