import React from "react";

function CategoryFilter({ categories, currentCategory, onCategoryClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button 
          key={category} 
          className={category === currentCategory ? "selected" : ""}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
