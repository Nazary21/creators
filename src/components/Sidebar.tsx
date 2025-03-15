import React from 'react';

interface SidebarProps {
  activeKey?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeKey = 'search' }) => {
  // Top menu items
  const menuItems = [
    { 
      key: 'search', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-1.svg'
    },
    { 
      key: 'messages', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-2.svg'
    },
    { 
      key: 'campaigns', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-3.svg'
    },
    // Removed navigation/rocket icon and moved to bottomItems
  ];

  // Bottom menu items
  const bottomItems = [
    { 
      key: 'communities', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-4.svg'
    },
    { 
      key: 'calendar', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-6.svg'
    },
    { 
      key: 'settings', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-7.svg'
    },
    { 
      key: 'profile', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-5.svg'
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">W</div>
      </div>
      
      <div className="sidebar-content" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)' }}>
        {/* Top menu items */}
        <div className="sidebar-menu">
          {menuItems.map(item => (
            <div 
              key={item.key} 
              className={`sidebar-menu-item ${activeKey === item.key ? 'active' : ''}`}
            >
              <img src={item.icon} alt={item.key} />
            </div>
          ))}
        </div>
        
        {/* Bottom menu items */}
        <div className="sidebar-bottom-menu" style={{ marginTop: 'auto', marginBottom: '16px' }}>
          {bottomItems.map(item => (
            <div 
              key={item.key} 
              className={`sidebar-menu-item ${activeKey === item.key ? 'active' : ''}`}
            >
              <img src={item.icon} alt={item.key} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 