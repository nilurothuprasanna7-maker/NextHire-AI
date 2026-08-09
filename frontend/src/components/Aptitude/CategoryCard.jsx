import "./CategoryCard.css";

const categories = [
  "Quantitative Aptitude",
  "Logical Reasoning",
  "Verbal Ability",
  "Data Interpretation",
];

function CategoryCard({ onSelect }) {
  return (
    <div className="category-card">

      <h1>🧠 Aptitude Test</h1>

      <p>
        Select a category to begin your aptitude practice.
      </p>

      <div className="category-grid">
        {categories.map((category) => (
          <button
            key={category}
            className="category-btn"
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>

    </div>
  );
}

export default CategoryCard;