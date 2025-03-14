/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';
import { expandedCreators, searchExpandedCreators } from '@/data/mockData';
import Sidebar from '@/components/Sidebar';
import FilterSidebar from '@/components/FilterSidebar';
import CreatorCard from '@/components/CreatorCard';
import SearchBar from '@/components/SearchBar';
import { DownOutlined } from '@ant-design/icons';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCreators, setFilteredCreators] = useState(expandedCreators);
  const [_isCardsView, _setIsCardsView] = useState(true);
  const [_savedCreators, setSavedCreators] = useState<string[]>([]);
  const [_activeCreatorId, setActiveCreatorId] = useState<string | null>(null);

  useEffect(() => {
    // Update filtered creators when search query changes
    const results = searchExpandedCreators(searchQuery);
    setFilteredCreators(results);
  }, [searchQuery]);

  // Set up event listener for creator drawer navigation
  useEffect(() => {
    const handleOpenProfileDrawer = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.creatorId) {
        setActiveCreatorId(customEvent.detail.creatorId);
        
        // Find the creator element and trigger click
        setTimeout(() => {
          const creatorElement = document.querySelector(`[data-creator-id="${customEvent.detail.creatorId}"]`);
          if (creatorElement) {
            // For normal opening, click on the element
            (creatorElement as HTMLElement).click();
          }
        }, 10);
      }
    };

    document.addEventListener('openProfileDrawer', handleOpenProfileDrawer);
    
    return () => {
      document.removeEventListener('openProfileDrawer', handleOpenProfileDrawer);
    };
  }, []);

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
    { key: 'Skate2025', name: 'Skate 2025' },
    { key: 'high-view-health', name: 'high-view-health' },
    { key: 'tech savvy', name: 'tech savvy' },
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
            <span className="results-count-text">{filteredCreators.length} Creators</span>
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
          {filteredCreators.map((creator, index) => (
            <div key={creator.id} data-creator-id={creator.id}>
              <CreatorCard 
                creator={creator} 
                onSaveCreator={handleSaveCreator}
                allCreators={filteredCreators}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
