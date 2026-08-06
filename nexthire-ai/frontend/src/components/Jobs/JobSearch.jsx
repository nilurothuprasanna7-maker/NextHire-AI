import { useState } from "react";
import "./JobSearch.css";

function JobSearch({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="job-search">

      <input
        type="text"
        placeholder="Search Company or Role..."
        value={search}
        onChange={handleChange}
      />

    </div>
  );
}

export default JobSearch;