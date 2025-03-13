import React, { useState, useEffect } from 'react';
import { 
  CheckCircleFilled, 
  CloseOutlined, 
  UpOutlined,
  DownOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined,
  ExpandOutlined
} from '@ant-design/icons';
import { Creator } from '@/data/mockData';
import Image from 'next/image';

interface ProfileDrawerProps {
  creator: Creator;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string) => void;
  onNext?: (e: React.MouseEvent) => void;
  onPrevious?: (e: React.MouseEvent) => void;
}

type DrawerTab = 'overview' | 'messages' | 'notes';

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ 
  creator, 
  isOpen, 
  onClose,
  onSave,
  onNext,
  onPrevious
}) => {
  const [activeTab, setActiveTab] = useState<DrawerTab>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [drawerState, setDrawerState] = useState<'default' | 'saved'>('default');

  // Set initial state based on creator's saved status
  useEffect(() => {
    if (creator.isSaved) {
      setDrawerState('saved');
    } else {
      setDrawerState('default');
    }
  }, [creator.isSaved]);

  const handleSaveToCollection = () => {
    setDrawerState('saved');
    onSave(creator.id);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  if (!isOpen) return null;

  return (
    <div className="profile-drawer-overlay">
      <div className={`profile-drawer ${isOpen ? 'open' : ''}`}>
        {/* Navigation buttons */}
        <div className="profile-drawer-navigation">
          <button className="profile-drawer-close" onClick={onClose}>
            <CloseOutlined />
          </button>
          {onPrevious && (
            <button 
              className="profile-drawer-nav-button" 
              onClick={(e) => onPrevious(e)}
            >
              <UpOutlined />
            </button>
          )}
          {onNext && (
            <button 
              className="profile-drawer-nav-button" 
              onClick={(e) => onNext(e)}
            >
              <DownOutlined />
            </button>
          )}
        </div>
        
        {/* Main drawer content */}
        <div className="profile-drawer-content">
          {/* Creator header */}
          <div className="profile-drawer-header">
            <div className="profile-drawer-header-main">
              <div className="profile-drawer-avatar">
                <img 
                  src={creator.profileImage || `/images/creators/default.jpg`}
                  alt={creator.name}
                />
              </div>
              
              <div className="profile-drawer-info">
                <div className="profile-drawer-name-row">
                  <h2 className="profile-drawer-name">{creator.name}</h2>
                  {creator.verified && <CheckCircleFilled className="verified-badge" />}
                </div>
                
                <div className="profile-drawer-status">
                  <span className="open-to-cooperation">
                    Open to cooperation
                  </span>
                </div>
              </div>
            </div>
            
            <div className="profile-drawer-header-actions">
              <button className="profile-drawer-action-button">
                <SearchOutlined />
              </button>
              
              {drawerState === 'default' ? (
                <button 
                  className="profile-drawer-save-button"
                  onClick={handleSaveToCollection}
                >
                  Save to collection
                </button>
              ) : (
                <>
                  <button className="profile-drawer-saved-button">
                    Saved
                  </button>
                  {!isSidebarOpen && (
                    <button 
                      className="profile-drawer-expand-button"
                      onClick={toggleSidebar}
                    >
                      <ExpandOutlined />
                      Manage
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          
          {/* Contact info */}
          <div className="profile-drawer-contact">
            <div className="contact-item">
              <MailOutlined className="contact-icon" />
              <div className="contact-content">
                <div className="contact-label">Email</div>
                <div className="contact-value">{creator.email}</div>
              </div>
            </div>
            
            <div className="contact-item">
              <EnvironmentOutlined className="contact-icon" />
              <div className="contact-content">
                <div className="contact-label">Location</div>
                <div className="contact-value">{creator.location}</div>
              </div>
            </div>
            
            <div className="contact-item">
              <PhoneOutlined className="contact-icon" />
              <div className="contact-content">
                <div className="contact-label">Phone</div>
                <div className="contact-value">{creator.phone}</div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="profile-drawer-tags">
            {creator.tags.map((tag, index) => (
              <span key={index} className="creator-tag">{tag}</span>
            ))}
            <button className="add-tag-button">
              <PlusOutlined /> New Tag
            </button>
          </div>
          
          {/* Main content area */}
          <div className="profile-drawer-main">
            {/* Default attributes */}
            <div className="profile-drawer-section">
              <div className="section-header">
                <h3 className="section-title">Default attributes</h3>
                <button className="section-action">
                  <SearchOutlined /> See all 66
                </button>
              </div>
              
              <div className="attributes-list">
                <div className="attribute-item">
                  <div className="attribute-label">
                    <EnvironmentOutlined /> Shipping address
                  </div>
                  <div className="attribute-value">
                    {creator.details.shippingAddress}
                    <span className="attribute-type">String</span>
                  </div>
                </div>
                
                <div className="attribute-item">
                  <div className="attribute-label">
                    Content Style
                  </div>
                  <div className="attribute-value">
                    <div className="attribute-tags">
                      {creator.details.contentStyle.map((style, index) => (
                        <span key={index} className="attribute-tag">{style}</span>
                      ))}
                    </div>
                    <span className="attribute-type">Collection</span>
                  </div>
                </div>
                
                <div className="attribute-item">
                  <div className="attribute-label">
                    Total followers
                  </div>
                  <div className="attribute-value">
                    {creator.details.totalFollowers}
                    <span className="attribute-type">Formula</span>
                  </div>
                </div>
                
                <div className="attribute-item">
                  <div className="attribute-label">
                    Languages Spoken
                  </div>
                  <div className="attribute-value">
                    <div className="attribute-tags">
                      {creator.details.languagesSpoken.map((language, index) => (
                        <span key={index} className="attribute-tag">{language}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Performance */}
            <div className="profile-drawer-section">
              <h3 className="section-title">Social Performance</h3>
              
              <div className="social-filters">
                <div className="social-filter">
                  <strong>All accounts</strong> {creator.socialPerformance.allAccounts}
                </div>
                <div className="social-filter">
                  <InstagramOutlined /> Instagram {creator.socialPerformance.instagram}
                </div>
                <div className="social-filter">
                  <svg className="tiktok-icon" viewBox="0 0 24 24" width="14" height="14">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  Tik-Tok {creator.socialPerformance.tiktok}
                </div>
              </div>
              
              <div className="social-tables-container">
                <div className="social-table-scroll">
                  <table className="social-table">
                    <thead>
                      <tr>
                        <th>Social Profiles</th>
                        <th>Followers</th>
                        <th>Total Posts</th>
                        <th>Last post</th>
                        <th>Eng. Rate</th>
                        <th>EMV</th>
                        <th>Impress</th>
                      </tr>
                    </thead>
                    <tbody>
                      {creator.socialProfiles.map((profile, index) => (
                        <tr key={index}>
                          <td>
                            {profile.platform === 'instagram' ? (
                              <><InstagramOutlined /> {profile.username}</>
                            ) : (
                              <><svg className="tiktok-icon" viewBox="0 0 24 24" width="14" height="14">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                              </svg> {profile.username}</>
                            )}
                          </td>
                          <td>{profile.followers}</td>
                          <td>{profile.totalPosts}</td>
                          <td>{profile.lastPost}</td>
                          <td>{profile.engagementRate}%</td>
                          <td>{profile.emv}</td>
                          <td>{profile.impressions}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="profile-drawer-section">
              <h3 className="section-title">Content</h3>
              <div className="content-count">{creator.contentCount} Posts</div>
              
              <div className="content-samples-grid">
                {creator.contentSamples.map((sample) => (
                  <div key={sample.id} className="content-sample">
                    <div className="content-sample-image">
                      {/* Placeholder image */}
                      <div className="content-sample-placeholder">
                        {sample.platform === 'instagram' ? (
                          <InstagramOutlined />
                        ) : (
                          <svg className="tiktok-icon large" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                          </svg>
                        )}
                      </div>
                      
                      <div className="content-sample-overlay">
                        <div className="content-sample-stats">
                          {sample.platform === 'instagram' ? (
                            <InstagramOutlined />
                          ) : (
                            <svg className="tiktok-icon" viewBox="0 0 24 24" width="14" height="14">
                              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                          )}
                          <span>{sample.followers}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Management sidebar (only visible when saved) */}
        {drawerState === 'saved' && isSidebarOpen && (
          <div className="profile-drawer-sidebar">
            <div className="sidebar-header">
              <h3>Account manager</h3>
              <button className="sidebar-close" onClick={toggleSidebar}>
                <CloseOutlined />
              </button>
            </div>
            
            <div className="sidebar-tabs">
              <button 
                className={`sidebar-tab ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`sidebar-tab ${activeTab === 'messages' ? 'active' : ''}`}
                onClick={() => setActiveTab('messages')}
              >
                Messages
              </button>
              <button 
                className={`sidebar-tab ${activeTab === 'notes' ? 'active' : ''}`}
                onClick={() => setActiveTab('notes')}
              >
                Notes
              </button>
            </div>
            
            <div className="sidebar-content">
              {activeTab === 'overview' && (
                <div className="sidebar-overview">
                  <div className="overview-campaigns">
                    <h4>2 Campaigns</h4>
                    <button className="add-campaign-button">
                      <div className="button-icon">+</div>
                      Add to campaign
                    </button>
                    
                    <div className="campaign-item">
                      <div className="campaign-icon">📄</div>
                      <div className="campaign-details">
                        <div className="campaign-name">California Skaters</div>
                        <div className="campaign-status">In progress</div>
                      </div>
                      <div className="campaign-action">
                        <RightOutlined />
                      </div>
                    </div>
                    
                    <div className="campaign-item">
                      <div className="campaign-icon">📄</div>
                      <div className="campaign-details">
                        <div className="campaign-name">New York Skaters</div>
                        <div className="campaign-status">On hold</div>
                      </div>
                      <div className="campaign-action">
                        <RightOutlined />
                      </div>
                    </div>
                  </div>
                  
                  <div className="overview-attributes">
                    <div className="attributes-header">
                      <h4>My attributes</h4>
                      <button className="add-attribute-button">
                        <div className="button-icon">+</div>
                        Add attribute
                      </button>
                    </div>
                    
                    <div className="attribute-item">
                      <div className="attribute-label">
                        <EnvironmentOutlined /> Gift address
                      </div>
                      <div className="attribute-value">
                        {creator.details.shippingAddress}
                        <span className="attribute-type">String</span>
                      </div>
                    </div>
                    
                    <div className="attribute-item">
                      <div className="attribute-label">
                        Content Style
                      </div>
                      <div className="attribute-value">
                        <div className="attribute-tags">
                          {creator.details.contentStyle.map((style, index) => (
                            <span key={index} className="attribute-tag">{style}</span>
                          ))}
                        </div>
                        <span className="attribute-type">Collection</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'messages' && (
                <div className="sidebar-messages">
                  <div className="message-date">5 Mar at 10:34am</div>
                  <div className="message-item outgoing">
                    <div className="message-avatar">U</div>
                    <div className="message-content">
                      <div className="message-header">
                        You <span className="message-destination">to {creator.email}</span>
                      </div>
                      <div className="message-body">
                        <p>Hi {creator.name.split(' ')[0]},</p>
                        <p>I hope this message finds you well! I'm reaching out about a collaboration opportunity at [Brand Name].</p>
                        <p>We'd love to work with you on our upcoming campaign.</p>
                        <p>Best,<br />Mark</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="message-composer">
                    <div className="composer-input">
                      <p>Hi {creator.name.split(' ')[0]},</p>
                      <p>We're looking for creators like you to help showcase our...</p>
                    </div>
                    <button className="composer-send">
                      ➤
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'notes' && (
                <div className="sidebar-notes">
                  <p>Notes will appear here</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDrawer; 