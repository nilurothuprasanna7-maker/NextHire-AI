import "./PlacementNews.css";

const news = [
  "🚀 TCS NQT Registration Open",
  "💼 Infosys Off Campus Hiring",
  "🌍 Google STEP Applications Started",
  "🏢 Accenture Freshers Recruitment",
];

function PlacementNews() {
  return (
    <div className="placement-news">

      <h2>📰 Placement News</h2>

      <ul>
        {news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default PlacementNews;