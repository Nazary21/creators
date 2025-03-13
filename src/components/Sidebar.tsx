import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  activeKey?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeKey = 'search' }) => {
  // Menu items
  const menuItems = [
    { 
      key: 'search', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-1.svg', 
      href: '/' 
    },
    { 
      key: 'messages', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-2.svg', 
      href: '/messages' 
    },
    { 
      key: 'campaigns', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-3.svg', 
      href: '/campaigns' 
    },
    { 
      key: 'communities', 
      icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-4.svg', 
      href: '/communities' 
    },
  ];

  // Settings item
  const settingsItem = { 
    key: 'settings', 
    icon: '/images/icons/aa_menu_global/_Menu/Menu Item/Vertical/aa_navigation_icons-7.svg', 
    href: '/settings' 
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">W</div>
      </div>
      
      <div className="sidebar-content">
        <div className="sidebar-menu">
          {menuItems.map(item => (
            <Link 
              key={item.key} 
              href={item.href}
              className={`sidebar-menu-item ${activeKey === item.key ? 'active' : ''}`}
            >
              <img src={item.icon} alt={item.key} />
            </Link>
          ))}
        </div>
        
        <div className="mt-auto mb-4">
          <Link 
            href={settingsItem.href}
            className="sidebar-menu-item"
          >
            <img src={settingsItem.icon} alt={settingsItem.key} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 