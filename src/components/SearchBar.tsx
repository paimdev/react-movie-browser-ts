import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) onSearch(query.trim());
    };

    return (
        <form onSubmit={handleSearch} style={{ display: "flex", marginBottom: "20px" }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies or TV shows..."
                style={{
                    flex: 1,
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px 0 0 5px",
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#007BFF",
                    color: "white",
                    borderRadius: "0 5px 5px 0",
                }}
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
