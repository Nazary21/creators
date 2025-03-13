import React from 'react';
import { FilterOutlined, SearchOutlined, CameraOutlined } from '@ant-design/icons';

interface SearchBarProps {
  query: string;
  onSearch: (value: string) => void;
  onQueryChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch, onQueryChange }) => {
  return (
    <div className="search-container">
      <button className="filter-button">
        <FilterOutlined />
        Add Filters
      </button>
      
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Running in the forest"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch(query)}
          className="search-input"
        />
        <SearchOutlined className="search-prefix-icon" />
        <CameraOutlined className="search-suffix-icon" />
      </div>
    </div>
  );
};

export default SearchBar; 