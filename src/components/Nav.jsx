import React from "react";
import "../scss/nav.scss";

const Nav = ({ categories, setSelectedCategory }) => {
  return (
    <nav>
      <h3 className="brand">Movie Dictionary</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.categoryId}>
            <i onClick={() => setSelectedCategory(category.categoryId)}>
              {category.categoryName}
            </i>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
