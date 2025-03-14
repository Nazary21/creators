/* eslint-disable @typescript-eslint/no-unused-vars, react/no-unescaped-entities, @next/next/no-img-element, react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { 
  // CheckCircleFilled, // Unused import
  CloseOutlined, 
  UpOutlined,
  DownOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  // InstagramOutlined, // Unused import
  PlusOutlined,
  RightOutlined,
  SearchOutlined,
  // ExpandOutlined, // Unused import
  EllipsisOutlined,
  CommentOutlined
} from '@ant-design/icons';
import { Creator } from '@/data/mockData';
// import Image from 'next/image'; // Unused import

interface ProfileDrawerProps {
  creator: Creator;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string) => void;
  onNext?: (e: React.MouseEvent) => void;
  onPrevious?: (e: React.MouseEvent) => void;
}

// Drawer states
type DrawerState = 'default' | 'saved';
type DrawerTab = 'overview' | 'messages' | 'notes';
type SocialTab = 'all' | 'instagram' | 'tiktok' | 'youtube';

// Helper function to get story image path
const getStoryImagePath = (creatorId: string, index: number) => {
  const images = [
    '/images/Stories/photo-1506790144-fe3c68e4247d.avif',
    '/images/Stories/photo-1517732306149-e8f829eb588a.avif',
    '/images/Stories/photo-1527856263669-12c3a0af2aa6.avif',
    '/images/Stories/photo-1528543606781-2f6e6857f318.avif',
    '/images/Stories/photo-1532635241-17e820acc59f.avif',
    '/images/Stories/photo-1562593028-1fe2d15bde36.avif',
    '/images/Stories/photo-1741526798351-50eeb46b2a06.avif',
    '/images/Stories/photo-1741567348603-0bef4612bea2.avif',
    '/images/Stories/premium_photo-1661895081205-791c94434c78.avif',
    '/images/Stories/premium_photo-1663054774427-55adfb2be76f.avif'
  ];
  
  // Use a deterministic way to select images based on creator ID and index
  const imageIndex = (parseInt(creatorId) * 3 + index) % images.length;
  return images[Math.abs(imageIndex)];
};

// Generate random like counts distinct from follower counts
const getLikeCount = (followersCount: string) => {
  const followers = parseInt(followersCount.replace(/[^\d]/g, ''));
  const variation = (0.2 + Math.random() * 0.6); // 20-80% of followers
  return Math.floor(followers * variation).toLocaleString();
};

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ 
  creator, 
  isOpen, 
  onClose,
  onSave,
  onNext,
  onPrevious
}) => {
  // State
  const [drawerState, setDrawerState] = useState<DrawerState>('default');
  const [activeTab, setActiveTab] = useState<DrawerTab>('overview');
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [activeSocialTab, setActiveSocialTab] = useState<SocialTab>('all');
  
  // Handle drawer close
  const handleClose = () => {
    onClose();
  };
  
  // Set the drawer state based on creator's saved status
  useEffect(() => {
    if (creator.isSaved) {
      setDrawerState('saved');
    } else {
      setDrawerState('default');
      // Reset sidebar visibility when switching to default state
      setShowSidebar(true);
    }
  }, [creator.isSaved]);
  
  // Disable body scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      // Save current overflow value
      const originalOverflow = document.body.style.overflow;
      // Disable scrolling on body
      document.body.style.overflow = 'hidden';
      
      // Re-enable scrolling on cleanup
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);
  
  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === 'ArrowUp' && onPrevious) {
          e.preventDefault();
          onPrevious(e as unknown as React.MouseEvent);
        } else if (e.key === 'ArrowDown' && onNext) {
          e.preventDefault();
          onNext(e as unknown as React.MouseEvent);
        } else if (e.key === 'Escape') {
          handleClose();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onPrevious, onNext, handleClose]);
  
  // Handle save to collection
  const handleSaveToCollection = () => {
    onSave(creator.id);
    setDrawerState('saved');
    // Auto-open sidebar when saving
    setShowSidebar(true);
  };
  
  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(prevState => !prevState);
  };

  // Render the header section
  const renderHeader = () => (
    <div className="profile-drawer-header">
      <div className="profile-drawer-header-main">
        <div className="profile-drawer-avatar">
          <img 
            src={creator.profileImage || `https://source.unsplash.com/random/72x72/?portrait&sig=${creator.id}`}
            alt={creator.name}
          />
        </div>
        
        <div className="profile-drawer-name-container">
          <div className="profile-drawer-name-row">
            <h3 className="profile-drawer-name">{creator.name}</h3>
          </div>
          <div className="profile-status-pill">
            <div className="profile-status-icon">
              <img 
                src={drawerState === 'saved' ? "/images/icons/progress-manual-cf.svg" : "/images/icons/progress-manual-cf.svg"} 
                alt="status"
                style={{
                  width: '16x',
                  height: '16px',
                  filter: drawerState === 'saved' 
                    ? "brightness(0) saturate(100%) invert(23%) sepia(97%) saturate(3769%) hue-rotate(218deg) brightness(95%) contrast(91%)" 
                    : "brightness(0) saturate(100%) invert(46%) sepia(16%) saturate(255%) hue-rotate(174deg) brightness(90%) contrast(87%)"
                }}
              />
            </div>
            <span className={`profile-status-text ${drawerState === 'saved' ? "in-progress" : ""}`}>
              {drawerState === 'saved' ? "In progress" : "Open to cooperation"}
            </span>
          </div>
        </div>
      </div>
      
      <div className="profile-drawer-header-actions">
        <button className="profile-drawer-button profile-drawer-action-button">
          <img src="/images/icons/PlusOutlined.svg" alt="Add" />
        </button>
        
        <button className="profile-drawer-button profile-drawer-action-button">
          <img src="/images/icons/ExportOutlined.svg" alt="Export" />
        </button>
        
        {drawerState === 'default' ? (
          <button 
            className="profile-drawer-button profile-drawer-save-button"
            onClick={handleSaveToCollection}
          >
            Save
          </button>
        ) : (
          <button 
            className="profile-drawer-button profile-drawer-save-button saved"
            onClick={handleSaveToCollection}
          >
            Saved
          </button>
        )}
      </div>
    </div>
  );

  // Render the contact section
  const renderContact = () => (
    <div className="profile-drawer-contact">
      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-label">
            <MailOutlined className="contact-icon" />
            Email
          </div>
          <div className="contact-value">{creator.email}</div>
        </div>
        
        <div className="contact-item">
          <div className="contact-label">
            <EnvironmentOutlined className="contact-icon" />
            Location
          </div>
          <div className="contact-value">{creator.location}</div>
        </div>
        
        <div className="contact-item">
          <div className="contact-label">
            <PhoneOutlined className="contact-icon" />
            Phone
          </div>
          <div className="contact-value">
            {creator.phone} 
            <span className="contact-tag" style={{ marginLeft: '8px', fontSize: '12px' }}>+3</span>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-label">
            <img src="/images/icons/tag.svg" alt="Tags" className="contact-icon" style={{ width: '16px', height: '16px' }} />
            Tags
          </div>
          <div className="contact-tags">
            {creator.tags.length > 0 && (
              <span className="contact-tag">{creator.tags[0]}</span>
            )}
            {creator.tags.length > 1 && (
              <span className="contact-tag">+{creator.tags.length - 1} tags</span>
            )}
            <button className="contact-new-tag">
              <PlusOutlined style={{ fontSize: '10px', marginRight: '4px' }} />
              New Tag
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Render attributes section
  const renderAttributes = () => (
    <div className="profile-drawer-section">
      <div className="section-header">
        <h3 className="section-title">Creator details</h3>
        <button className="section-action">
          <SearchOutlined style={{ color: '#666' }} />
          <span>See all 66</span>
        </button>
      </div>
      
      <div className="data-table">
        <div className="attributes-table">
          <div className="attributes-table-header">
            <div className="attributes-table-cell">Attributes</div>
            <div className="attributes-table-cell">Values</div>
          </div>
          
          <div className="attributes-table-row">
            <div className="attributes-table-cell attribute-label">
              <EnvironmentOutlined className="attribute-icon" />
              <span>Shipping address</span>
              <span className="attribute-type">String</span>
            </div>
            <div className="attributes-table-cell attribute-value truncate">
              {creator.details.shippingAddress}
            </div>
          </div>
          
          <div className="attributes-table-row">
            <div className="attributes-table-cell attribute-label">
              <svg className="attribute-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 13C14.76 13 13.09 13.81 12 15.09C10.91 13.81 9.24 13 7.5 13C4.42 13 2 15.41 2 18.5C2 21.58 4.42 24 7.5 24C9.24 24 10.91 23.19 12 21.91C13.09 23.19 14.76 24 16.5 24C19.58 24 22 21.58 22 18.5C22 15.41 19.58 13 16.5 13ZM7.5 22C5.5 22 4 20.5 4 18.5C4 16.5 5.5 15 7.5 15C9.5 15 11 16.5 11 18.5C11 20.5 9.5 22 7.5 22ZM16.5 22C14.5 22 13 20.5 13 18.5C13 16.5 14.5 15 16.5 15C18.5 15 20 16.5 20 18.5C20 20.5 18.5 22 16.5 22Z" fill="currentColor"/>
              </svg>
              <span>Total followers</span>
              <span className="attribute-type">Formula</span>
            </div>
            <div className="attributes-table-cell attribute-value">
              {creator.details.totalFollowers}
            </div>
          </div>

          <div className="attributes-table-row">
            <div className="attributes-table-cell attribute-label">
              <svg className="attribute-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19H2C2 15.6863 4.68629 13 8 13H16C19.3137 13 22 15.6863 22 19H20C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19ZM12 12C8.685 12 6 9.315 6 6C6 2.685 8.685 0 12 0C15.315 0 18 2.685 18 6C18 9.315 15.315 12 12 12ZM12 10C14.21 10 16 8.21 16 6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6C8 8.21 9.79 10 12 10Z" fill="currentColor"/>
              </svg>
              <span>Content Style</span>
              <span className="attribute-type">Collection</span>
            </div>
            <div className="attributes-table-cell attribute-value">
              <div className="attribute-tags">
                {creator.details.contentStyle.map((style, index) => (
                  <span key={index} className="attribute-tag">{style}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="attributes-table-row">
            <div className="attributes-table-cell attribute-label">
              <CommentOutlined className="attribute-icon" />
              <span>Languages Spoken</span>
              <span className="attribute-type">Collection</span>
            </div>
            <div className="attributes-table-cell attribute-value">
              <div className="attribute-tags">
                {creator.details.languagesSpoken.map((language, index) => (
                  <span key={index} className="attribute-tag">{language}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render social performance section
  const renderSocialPerformance = () => {
    // Data for different social platforms
    const socialData = {
      all: (
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
                  <div className="social-profile-cell">
                    <div className="platform-icon">
                      {profile.platform === 'instagram' ? (
                        <img src="/images/icons/Name=insta.svg" alt="Instagram" />
                      ) : (
                        <img src="/images/icons/Name=tik-tok.svg" alt="TikTok" />
                      )}
                    </div>
                    <div>
                      <div className="platform-name">{profile.platform === 'instagram' ? 'Instagram' : 'TikTok'}</div>
                      <div className="username">{profile.username}</div>
                    </div>
                  </div>
                </td>
                <td className="posts-count">{profile.followers}</td>
                <td className="posts-count">{profile.totalPosts}</td>
                <td>{profile.lastPost}d</td>
                <td>{profile.engagementRate}%</td>
                <td>{profile.emv}</td>
                <td>{profile.impressions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
      instagram: (
        <table className="social-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Followers</th>
              <th>Posts</th>
              <th>Last post</th>
              <th>Eng. Rate</th>
              <th>Comments</th>
              <th>Likes</th>
              <th>Reach</th>
              <th>Saves</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="social-profile-cell">
                  <div className="platform-icon">
                    <img src="/images/icons/instagram.svg" alt="Instagram" />
                  </div>
                  <div>
                    <div className="platform-name">Instagram</div>
                    <div className="username">{creator.socialProfiles[0].username}</div>
                  </div>
                </div>
              </td>
              <td className="posts-count">{creator.socialProfiles[0].followers}</td>
              <td className="posts-count">{creator.socialProfiles[0].totalPosts}</td>
              <td>{creator.socialProfiles[0].lastPost}d</td>
              <td>{creator.socialProfiles[0].engagementRate}%</td>
              <td>3.2k</td>
              <td>15k</td>
              <td>95k</td>
              <td>2.5k</td>
            </tr>
          </tbody>
        </table>
      ),
      tiktok: (
        <table className="social-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Followers</th>
              <th>Posts</th>
              <th>Last post</th>
              <th>Eng. Rate</th>
              <th>Comments</th>
              <th>Likes</th>
              <th>Shares</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="social-profile-cell">
                  <div className="platform-icon">
                    <img src="/images/icons/tiktok.svg" alt="TikTok" />
                  </div>
                  <div>
                    <div className="platform-name">TikTok</div>
                    <div className="username">{creator.socialProfiles[1].username}</div>
                  </div>
                </div>
              </td>
              <td className="posts-count">{creator.socialProfiles[1].followers}</td>
              <td className="posts-count">{creator.socialProfiles[1].totalPosts}</td>
              <td>{creator.socialProfiles[1].lastPost}d</td>
              <td>{creator.socialProfiles[1].engagementRate}%</td>
              <td>45k</td>
              <td>258k</td>
              <td>32k</td>
              <td>1.1M</td>
            </tr>
          </tbody>
        </table>
      ),
      youtube: (
        <table className="social-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Subscribers</th>
              <th>Videos</th>
              <th>Last video</th>
              <th>Eng. Rate</th>
              <th>Comments</th>
              <th>Likes</th>
              <th>Views</th>
              <th>Watch Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="social-profile-cell">
                  <div className="platform-icon">
                    <img src="/images/icons/youtube.svg" alt="YouTube" />
                  </div>
                  <div>
                    <div className="platform-name">YouTube</div>
                    <div className="username">@{creator.name.toLowerCase().replace(/\s/g, '')}</div>
                  </div>
                </div>
              </td>
              <td className="posts-count">400K</td>
              <td className="posts-count">78</td>
              <td>14d</td>
              <td>4.2%</td>
              <td>1.8k</td>
              <td>21k</td>
              <td>580k</td>
              <td>45k hrs</td>
            </tr>
          </tbody>
        </table>
      )
    };

    // Follower counts for the tabs
    const followerCounts = {
      all: "4.5M",
      instagram: "2.4M",
      tiktok: "1.1M",
      youtube: "400K"
    };

    return (
      <div className="profile-drawer-section">
        <h3 className="section-title">Social Performance</h3>
        
        <div className="social-tabs">
          <button 
            className={`social-tab ${activeSocialTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSocialTab('all')}
          >
            <img src="/images/icons/Name=stats.svg" alt="Stats" className="tab-icon" />
            <span>All accounts</span>
            <span className="tab-stats">{followerCounts.all}</span>
          </button>
          <button 
            className={`social-tab ${activeSocialTab === 'instagram' ? 'active' : ''}`}
            onClick={() => setActiveSocialTab('instagram')}
          >
            <img src="/images/icons/Name=insta.svg" alt="Instagram" className="tab-icon" />
            <span>Instagram</span>
            <span className="tab-stats">{followerCounts.instagram}</span>
          </button>
          <button 
            className={`social-tab ${activeSocialTab === 'tiktok' ? 'active' : ''}`}
            onClick={() => setActiveSocialTab('tiktok')}
          >
            <img src="/images/icons/Name=tik-tok.svg" alt="TikTok" className="tab-icon" />
            <span>Tik-Tok</span>
            <span className="tab-stats">{followerCounts.tiktok}</span>
          </button>
          <button 
            className={`social-tab ${activeSocialTab === 'youtube' ? 'active' : ''}`}
            onClick={() => setActiveSocialTab('youtube')}
          >
            <img src="/images/icons/youtube.svg" alt="YouTube" className="tab-icon" />
            <span>Youtube</span>
            <span className="tab-stats">{followerCounts.youtube}</span>
          </button>
        </div>
        
        <div className="social-card">
          <div className="social-tables-container">
            {socialData[activeSocialTab]}
          </div>
        </div>
      </div>
    );
  };

  // Render content samples section
  const renderContentSamples = () => (
    <div className="profile-drawer-section">
      <div className="section-header">
        <h3 className="section-title">Content</h3>
        <span className="posts-count">{creator.contentCount} Posts</span>
      </div>
      
      <div className="content-card">
        <div className="content-samples-grid">
          {/* Generate 6 content samples using the helper function */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="content-sample">
              <div className="content-sample-image">
                <img 
                  src={getStoryImagePath(creator.id, index)} 
                  alt="Content sample" 
                  className="sample-image"
                />
                
                <div className="content-sample-overlay">
                  <div className="content-sample-stats">
                    <div className="stat-item">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="heart-icon">
                        <path d="M8 15.36C7.768 15.36 7.544 15.296 7.352 15.176C6.624 14.688 5.928 14.208 5.304 13.768L5.288 13.76C3.712 12.64 2.328 11.648 1.368 10.664C0.28 9.544 0 8.472 0 7.36C0 6.28 0.36 5.288 1.016 4.56C1.68 3.824 2.608 3.376 3.592 3.376C4.312 3.376 4.96 3.624 5.536 4.112C5.824 4.352 6.088 4.64 6.328 4.976C6.44 5.144 6.592 5.36 6.72 5.56C6.848 5.36 6.992 5.144 7.104 4.976C7.344 4.64 7.608 4.352 7.896 4.112C8.472 3.624 9.12 3.376 9.84 3.376C10.824 3.376 11.752 3.824 12.416 4.56C13.072 5.288 13.432 6.28 13.432 7.36C13.432 8.472 13.152 9.544 12.064 10.664C11.104 11.648 9.72 12.64 8.144 13.76L8.128 13.768C7.504 14.208 6.808 14.688 6.08 15.176C5.888 15.296 5.664 15.36 5.432 15.36H8Z" fill="white"/>
                      </svg>
                      {getLikeCount(creator.socialProfiles[0].followers)}
                    </div>
                    <div className="stat-item">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="comment-icon">
                        <path d="M8 0C3.6 0 0 3.1 0 7C0 8.9 0.8 10.6 2.1 11.9C2 12.6 1.6 13.8 0.5 14.7C0.3 14.9 0.4 15.2 0.7 15.2C2.5 15.2 4 14.5 5 13.7C6 14 7 14.1 8 14.1C12.4 14.1 16 11 16 7C16 3.1 12.4 0 8 0ZM8 12.3C7.1 12.3 6.2 12.1 5.3 11.8C5.1 11.7 4.8 11.8 4.7 11.9C4.2 12.3 3.2 12.8 2.3 13C2.8 12.1 3 11.1 3.1 10.4C3.1 10.1 3 9.8 2.8 9.6C1.8 8.6 1.3 7.8 1.3 7C1.3 3.9 4.2 1.5 8 1.5C11.8 1.5 14.7 3.9 14.7 7C14.7 10.1 11.8 12.3 8 12.3Z" fill="white"/>
                      </svg>
                      {Math.floor(parseInt(getLikeCount(creator.socialProfiles[0].followers).replace(/,/g, '')) * 0.05).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render sidebar content
  const renderSidebarContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="sidebar-overview">
            <div className="overview-campaigns">
              <div className="attributes-header">
                <h4>Campaigns</h4>
                <div className="sidebar-header-actions">
                  <button className="attribute-action-button">
                    <PlusOutlined style={{ fontSize: '14px' }} />
                  </button>
                </div>
              </div>
              
              <div className="campaign-list">
                <div className="campaign-item">
                  <div className="campaign-icon">
                    <img src="/images/icons/pajamas_project.svg" alt="Campaign" />
                  </div>
                  <div className="campaign-details">
                    <div className="campaign-name">California Skaters</div>
                    <div className="campaign-status">
                      <span className="campaign-status-badge">In progress</span>
                    </div>
                  </div>
                  <button className="campaign-action">
                    <RightOutlined style={{ fontSize: '12px' }} />
                  </button>
                </div>
                
                <div className="campaign-item">
                  <div className="campaign-icon">
                    <img src="/images/icons/pajamas_project.svg" alt="Campaign" />
                  </div>
                  <div className="campaign-details">
                    <div className="campaign-name">New York Skaters</div>
                    <div className="campaign-status">
                      <span className="campaign-status-badge on-hold">On hold</span>
                    </div>
                  </div>
                  <button className="campaign-action">
                    <RightOutlined style={{ fontSize: '12px' }} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="my-attributes">
              <div className="attributes-header">
                <h4>My attributes</h4>
                <div className="sidebar-header-actions">
                  <button className="attribute-action-button">
                    <PlusOutlined style={{ fontSize: '14px' }} />
                  </button>
                </div>
              </div>
              
              <div className="attribute-list">
                <div className="attribute-item">
                  <div className="attribute-item-label">
                    <div className="attribute-item-icon">
                      <EnvironmentOutlined />
                    </div>
                    <div className="attribute-item-label-container">
                      Gift address
                      <span className="attribute-item-type">String</span>
                    </div>
                  </div>
                  <div className="attribute-item-value">
                    <div className="attribute-value-content">13th Street, 47 W 13th St, New York</div>
                  </div>
                </div>
                
                <div className="attribute-item">
                  <div className="attribute-item-label">
                    <div className="attribute-item-icon">
                      <span style={{ fontSize: '18px' }}>{ '{' }</span>
                    </div>
                    <div className="attribute-item-label-container">
                      Content Style
                      <span className="attribute-item-type">Collection</span>
                    </div>
                  </div>
                  <div className="attribute-item-value">
                    <div className="attribute-value-content">
                      <span className="attribute-tag">Educational</span>
                      <span className="attribute-entries">+4 entries</span>
                    </div>
                  </div>
                </div>
                
                <div className="attribute-item">
                  <div className="attribute-item-label">
                    <div className="attribute-item-icon">
                      Σ
                    </div>
                    <div className="attribute-item-label-container">
                      Total followers
                      <span className="attribute-item-type">Formula</span>
                    </div>
                  </div>
                  <div className="attribute-item-value">
                    <div className="attribute-value-content">221.7k</div>
                  </div>
                </div>
                
                <div className="attribute-item">
                  <div className="attribute-item-label">
                    <div className="attribute-item-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="attribute-item-label-container">
                      Languages Spoken
                      <span className="attribute-item-type">Collection</span>
                    </div>
                  </div>
                  <div className="attribute-item-value">
                    <div className="attribute-tags">
                      <span className="attribute-tag">Chinese</span>
                      <span className="attribute-tag">Spanish</span>
                      <span className="attribute-tag">English</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'messages':
        return (
          <div className="sidebar-messages">
            <div className="message-date">5 Mar at 10:34am</div>
            
            <div className="message-item">
              <div className="message-avatar">U</div>
              <div className="message-content">
                <div className="message-header">
                  You
                  <span className="message-destination">to {creator.email}</span>
                </div>
                <div className="message-body">
                  <p>Hi {creator.name.split(' ')[0]},</p>
                  <p>I hope this message finds you well! We&apos;re reaching out about a potential collaboration opportunity with our brand.</p>
                  <p>Would you be interested in learning more?</p>
                </div>
              </div>
            </div>
            
            <div className="message-composer">
              <div className="composer-input">
                <p>Type a message...</p>
              </div>
              <button className="composer-send">→</button>
            </div>
          </div>
        );
      case 'notes':
        return (
          <div className="sidebar-notes">
            <h4>Notes</h4>
            <p>Add notes about this creator</p>
          </div>
        );
      default:
        return null;
    }
  };

  // Render manage account button when sidebar is collapsed
  const renderManageAccountButton = () => {
    if (drawerState === 'saved' && !showSidebar) {
      return (
        <button className="manage-account-button" onClick={toggleSidebar}>
          <img src="/images/icons/collapse-left.svg" alt="Collapse" />
          <span>Manage creator</span>
        </button>
      );
    }
    return null;
  };

  return (
    <div className={`profile-drawer-overlay ${isOpen ? 'open' : ''}`}>
      <div className={`profile-drawer-container ${isOpen ? 'open' : ''} ${drawerState === 'saved' && showSidebar ? 'with-sidebar' : ''}`}>
        {/* Main drawer column */}
        <div className="profile-drawer-main-column">
          {/* Navigation controls */}
          <div className="profile-drawer-navigation">
            <div className="profile-drawer-nav-left">
              <button className="profile-drawer-close" onClick={handleClose}>
                <CloseOutlined />
              </button>
              
              <div className="profile-drawer-nav-buttons">
                {onPrevious && (
                  <button className="profile-drawer-nav-button" onClick={onPrevious}>
                    <UpOutlined />
                  </button>
                )}
                
                {onNext && (
                  <button className="profile-drawer-nav-button" onClick={onNext}>
                    <DownOutlined />
                  </button>
                )}
              </div>
            </div>
            
            {/* Manage Account button (only when sidebar is collapsed) */}
            {renderManageAccountButton()}
          </div>
          
          {/* Main content */}
          <div className="profile-drawer-content">
            {/* Profile header */}
            {renderHeader()}
            
            {/* Contact information */}
            {renderContact()}
            
            {/* Main sections */}
            <div className="profile-drawer-main">
              {/* Default attributes section */}
              {renderAttributes()}
              
              {/* Social Performance section */}
              {renderSocialPerformance()}
              
              {/* Content section */}
              {renderContentSamples()}
            </div>
          </div>
        </div>
        
        {/* Sidebar column - only shown when drawer state is 'saved' and sidebar is visible */}
        {drawerState === 'saved' && showSidebar && (
          <div className="profile-drawer-sidebar-column">
            <div className="profile-drawer-sidebar">
              <div className="sidebar-header">
                <h3>Creator manager</h3>
                <div className="sidebar-header-actions">
                  <button className="sidebar-action-button">
                    <EllipsisOutlined />
                  </button>
                  <button className="sidebar-action-button" onClick={toggleSidebar}>
                    <img src="/images/icons/collapse-right.svg" alt="Collapse" style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
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
                {renderSidebarContent()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDrawer; 