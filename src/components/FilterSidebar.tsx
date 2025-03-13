import React from 'react';
import { Typography, Button } from 'antd';
import { 
  SearchOutlined, 
  RightOutlined, 
  PlusOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

interface FilterSidebarProps {
  labels: Array<{ key: string; name: string }>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ labels }) => {
  return (
    <div className="filter-sidebar">
      <div className="filter-sidebar-header">
        Creator Search
      </div>

      <div className="filter-sidebar-section">
        {/* All Creators button */}
        <button className="filter-all-creators-btn">
          <UserOutlined />
          <span>All Creators</span>
        </button>

        {/* Search box for views/labels */}
        <div className="filter-search-wrapper">
          <SearchOutlined className="filter-search-icon" />
          <input 
            placeholder="View or Label" 
            className="filter-search-input"
          />
        </div>

        {/* Views section */}
        <div className="filter-sidebar-group">
          <div className="filter-section-header">
            <span className="filter-section-title">VIEWS</span>
            <PlusOutlined className="filter-section-icon" />
          </div>
        </div>

        {/* Labels section */}
        <div className="filter-sidebar-group">
          <div className="filter-section-header">
            <span className="filter-section-title">LABELS</span>
            <PlusOutlined className="filter-section-icon" />
          </div>
          {labels.map(label => (
            <div key={label.key} className="filter-label-item">
              <UserOutlined />
              <span className="filter-label-item-text">{label.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar; 