import { useState } from "react";
import { FaSearch } from "react-icons/fa";
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

      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search Company or Job Role..."
        value={search}
        onChange={handleChange}
      />

    </div>
  );
}

export default JobSearch;