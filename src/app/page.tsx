'use client';

import React, { useState, useEffect } from 'react';
import { creators, searchCreators } from '@/data/mockData';
import Sidebar from '@/components/Sidebar';
import FilterSidebar from '@/components/FilterSidebar';
import CreatorCard from '@/components/CreatorCard';
import SearchBar from '@/components/SearchBar';
import { DownOutlined } from '@ant-design/icons';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCreators, setFilteredCreators] = useState(creators);
  const [isCardsView, setIsCardsView] = useState(true);
  const [savedCreators, setSavedCreators] = useState<string[]>([]);

  useEffect(() => {
    // Update filtered creators when search query changes
    const results = searchCreators(searchQuery);
    setFilteredCreators(results);
  }, [searchQuery]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleSaveCreator = (id: string) => {
    // Update local state for saved creators
    setSavedCreators(prev => {
      if (prev.includes(id)) {
        return prev;
      } else {
        return [...prev, id];
      }
    });

    // Update creator's saved status in the filteredCreators array
    setFilteredCreators(prev => 
      prev.map(creator => 
        creator.id === id ? { ...creator, isSaved: true } : creator
      )
    );
  };

  // Labels for the filter sidebar
  const labels = [
    { key: 'shortlisted', name: 'Shortlisted' },
    { key: 'norway2024', name: 'NORWAY 2024' },
    { key: 'usebfragfree', name: 'US EB Frag Free' },
  ];

  return (
    <div className="app-layout">
      {/* Navigation sidebar */}
      <Sidebar activeKey="search" />
      
      {/* Filter sidebar */}
      <FilterSidebar labels={labels} />
      
      {/* Main content */}
      <div className="main-content">
        {/* Search bar */}
        <SearchBar 
          query={searchQuery} 
          onSearch={handleSearch} 
          onQueryChange={setSearchQuery}
        />

        {/* Results header */}
        <div className="results-header">
          <div className="results-count">
            <span className="results-count-text">{filteredCreators.length},000+ Creators</span>
            <div className="results-type">
              <span className="results-type-text">by Profiles</span>
              <DownOutlined className="results-type-icon" />
            </div>
          </div>
          
          <div className="view-options">
            <div className="view-options-container">
              <span className="view-option-text">Cards</span>
              <DownOutlined className="view-options-icon" />
            </div>
          </div>
        </div>

        {/* Results grid */}
        <div className="creators-grid">
          {filteredCreators.map((creator) => (
            <CreatorCard 
              key={creator.id} 
              creator={creator} 
              onSaveCreator={handleSaveCreator}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
