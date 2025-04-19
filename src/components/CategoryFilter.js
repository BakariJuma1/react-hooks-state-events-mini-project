import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onCategoryChange(category)} // Notify parent of category change
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
