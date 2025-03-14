/* eslint-disable @typescript-eslint/no-unused-vars, react/no-unescaped-entities, @next/next/no-img-element, react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
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
  CommentOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HomeOutlined,
  UserOutlined,
  TagOutlined,
  DesktopOutlined,
  TableOutlined,
  BarChartOutlined,
  KeyOutlined,
  ExpandOutlined
} from '@ant-design/icons';
import { Creator } from '@/data/mockData';
import { fetchUnsplashImage } from '@/utils/imageUtils';
import { Card, Button, Tag, Typography, Table, Tabs, Image } from 'antd';

const { Text } = Typography;

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

// Interface for image state with attribution
interface UnsplashImage {
  url: string;
  isLoading: boolean;
  attribution?: {
    name: string;
    username: string;
    link: string;
  }
}

// Interface for message data
interface MessageData {
  id: string;
  sender: 'creator' | 'manager';
  timestamp: string;
  content: string;
  creatorEmail?: string;
  managerEmail?: string;
}

// Helper function to load a story image from Unsplash based on creator tags
const loadStoryImage = async (creatorId: string, index: number, creatorTags?: string[]): Promise<UnsplashImage> => {
  // For all creators, use API with their tags
  if (creatorTags && creatorTags.length > 0) {
    try {
      // Get tag based on creator and index
      const tagIndex = (parseInt(creatorId) + index) % creatorTags.length;
      const primaryTag = creatorTags[tagIndex].toLowerCase();
      
      // Secondary categories to add variety
      const categories = ['portrait', 'lifestyle', 'travel', 'fashion', 'fitness', 'food', 
                        'photography', 'adventure', 'urban', 'nature', 'art'];
      const secondaryTag = categories[index % categories.length];
      
      // Create a signature based on creator ID and index for consistent images
      const signature = `${creatorId}-${index}`;
      
      // Get image from our API
      const imageData = await fetchUnsplashImage(primaryTag, secondaryTag, signature);
      
      return {
        url: imageData.url,
        isLoading: false,
        attribution: imageData.attribution
      };
    } catch (error) {
      console.error('Error loading image:', error);
    }
  }
  
  // Fallback placeholder if no tags or error
  return {
    url: 'https://picsum.photos/800/1000?grayscale',
    isLoading: false,
    attribution: {
      name: "Lorem Picsum",
      username: "picsum",
      link: "https://picsum.photos"
    }
  };
};

// Generate random like counts distinct from follower counts
const getLikeCount = (followersCount: string) => {
  const followers = parseInt(followersCount.replace(/[^\d]/g, ''));
  const variation = (0.2 + Math.random() * 0.6); // 20-80% of followers
  return Math.floor(followers * variation).toLocaleString();
};

// Helper function to format message content with creator name
const formatMessageContent = (content: string, creatorName: string): string => {
  return content.replace('[Creator Name]', creatorName)
               .replace('[creator name]', creatorName)
               .replace('[CreatorName]', creatorName)
               .replace('[creatorName]', creatorName);
};

// Mock message data generator
const getMockMessages = (creator: Creator): MessageData[] => {
  // Consistent manager name
  const managerName = 'Mark';
  const managerEmail = 'mark@yourcompany.com';
  
  return [
    {
      id: 'm1',
      sender: 'manager',
      timestamp: '5 Mar at 10:34am',
      content: `Hi ${creator.name.split(' ')[0]},\n\nI hope this message finds you well! I'm reaching out one more time about our collaboration opportunity at [Brand Name].\n\nWe're big fans of your work and believe your audience would love our [product/service]. This partnership would include:\n\n- [Compensation detail]\n- [Product detail]\n- [Creative freedom detail]\n- [Timeline detail]\n\nWe need to finalize our creator roster by [date]. If we don't hear back, we'll assume the timing isn't right, but we'd love to keep you in mind for future opportunities.\n\nAll the best,\nMark`,
      creatorEmail: creator.email,
      managerEmail: managerEmail
    },
    {
      id: 'm2',
      sender: 'creator',
      timestamp: '15 Mar at 9:00am',
      content: `Hi Mark,\n\nI'd be pleased to work with you but I'm all booked till March. We can sign contract this week and start working when there's room, so you have your post reserved.\n\nBest,\n${creator.name.split(' ')[0]}`,
      creatorEmail: creator.email,
      managerEmail: managerEmail
    }
  ];
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
  const [isHeaderSticky, setIsHeaderSticky] = useState<boolean>(false);
  
  // State for content images with attribution
  const [contentImages, setContentImages] = useState<UnsplashImage[]>([]);
  const imagesLoaded = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Reset image loaded state when creator changes
  useEffect(() => {
    // Reset images loaded flag when creator changes
    imagesLoaded.current = false;
    
    // Log for debugging
    console.log(`ProfileDrawer received creator: ${creator.name} (${creator.id})`);
  }, [creator.id]);
  
  // Handle drawer close
  const handleClose = () => {
    onClose();
    setDrawerState('default');
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
  
  // Handle scroll events to determine if header should show border
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        // Get the position of the avatar element
        const avatarElement = contentRef.current.querySelector('.profile-drawer-avatar');
        if (avatarElement) {
          const avatarRect = avatarElement.getBoundingClientRect();
          const headerHeight = 60; // Approximate header height
          
          // If the avatar top edge is above the header bottom (is scrolled under header)
          setIsHeaderSticky(avatarRect.top <= headerHeight);
        }
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen]);
  
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
          onPrevious(new MouseEvent('click') as unknown as React.MouseEvent);
        } else if (e.key === 'ArrowDown' && onNext) {
          e.preventDefault();
          onNext(new MouseEvent('click') as unknown as React.MouseEvent);
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

  // Effect to load images when the drawer opens or creator changes
  useEffect(() => {
    if (isOpen && !imagesLoaded.current) {
      const loadImages = async () => {
        // Initialize with loading placeholders
        const initialImages = Array(6).fill({
          url: 'https://via.placeholder.com/640x800?text=Loading...',
          isLoading: true
        });
        setContentImages(initialImages);
        
        // Load each image - increase to 6 images
        const loadedImages = await Promise.all(
          Array(6).fill(null).map((_, index) => 
            loadStoryImage(creator.id, index, creator.tags)
          )
        );
        
        setContentImages(loadedImages);
        imagesLoaded.current = true;
        
        console.log(`Loaded ${loadedImages.length} images for creator ${creator.name}`);
      };
      
      loadImages();
    }
    
    // Reset images loaded flag when drawer closes
    if (!isOpen) {
      imagesLoaded.current = false;
    }
  }, [isOpen, creator.id, creator.tags, creator.name]);

  // Group messages by date for rendering
  const groupMessagesByDate = (messages: MessageData[]) => {
    const grouped: { [key: string]: MessageData[] } = {};
    
    messages.forEach(message => {
      if (!grouped[message.timestamp]) {
        grouped[message.timestamp] = [];
      }
      grouped[message.timestamp].push(message);
    });
    
    return grouped;
  };

  // Render the header section
  const renderHeader = () => (
    <div className={`profile-drawer-header ${isHeaderSticky ? 'sticky' : ''}`}>
      <div className="profile-drawer-header-main">
        <div className="profile-drawer-avatar">
          <img 
            src={creator.profileImage}
            alt={creator.name}
          />
        </div>
        
        <div className="profile-drawer-name-container">
          <div className="profile-drawer-name-row">
            <h3 className="profile-drawer-name">{creator.name}</h3>
          </div>
          <div className={`profile-status-pill ${drawerState === 'saved' ? "primary" : ""}`}>
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
              <div className="attribute-icon">
                <EnvironmentOutlined />
              </div>
              <span>Shipping address</span>
              <span className="attribute-type">String</span>
            </div>
            <div className="attributes-table-cell attribute-value truncate">
              {creator.details.shippingAddress}
            </div>
          </div>
          
          <div className="attributes-table-row">
            <div className="attributes-table-cell attribute-label">
              <div className="attribute-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C10.4178 4 8.87104 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 18C10.8133 18 9.65328 17.6481 8.66658 16.9888C7.67989 16.3295 6.91085 15.3925 6.45673 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91825 8.59647 7.75736 7.75736C8.59648 6.91824 9.66558 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45672C15.3925 6.91085 16.3295 7.67988 16.9888 8.66658C17.6481 9.65327 18 10.8133 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM17 11.5H13V7.5H11V13.5H17V11.5Z" fill="currentColor"/>
                </svg>
              </div>
              <span>Total followers</span>
              <span className="attribute-type">Formula</span>
            </div>
            <div className="attributes-table-cell attribute-value">
              {creator.details.totalFollowers}
            </div>
          </div>

          <div className="attributes-table-row">
            <div className="attributes-table-cell attribute-label">
              <div className="attribute-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20H18V16C18 15.7348 18.1054 15.4804 18.2929 15.2929C18.4804 15.1054 18.7348 15 19 15C19.2652 15 19.5196 15.1054 19.7071 15.2929C19.8946 15.4804 20 15.7348 20 16V20ZM17 20H15V13C15 12.7348 15.1054 12.4804 15.2929 12.2929C15.4804 12.1054 15.7348 12 16 12C16.2652 12 16.5196 12.1054 16.7071 12.2929C16.8946 12.4804 17 12.7348 17 13V20ZM14 20H12V10C12 9.73478 12.1054 9.48043 12.2929 9.29289C12.4804 9.10536 12.7348 9 13 9C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V20ZM11 20H9V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V20ZM6 20H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5C5.26522 5 5.51957 5.10536 5.70711 5.29289C5.89464 5.48043 6 5.73478 6 6V20Z" fill="currentColor"/>
                </svg>
              </div>
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
              <div className="attribute-icon">
                <CommentOutlined />
              </div>
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
                <td>{parseFloat(profile.engagementRate.toString()).toFixed(2)}%</td>
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
              <td>{parseFloat(creator.socialProfiles[0].engagementRate.toString()).toFixed(2)}%</td>
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
              <td>{parseFloat(creator.socialProfiles[1].engagementRate.toString()).toFixed(2)}%</td>
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
        <h3 className="section-title">Content Samples</h3>
        <a href="#" className="section-action">View All ({creator.contentCount})</a>
      </div>
      
      <div className="content-samples-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {contentImages.map((image, index) => (
          <div key={index} className="content-sample">
            <div className="content-sample-image">
              <img 
                src={image.url} 
                alt="Content sample" 
                className="sample-image"
              />
              
              <div className="content-sample-overlay">
                <div className="content-sample-stats">
                  <div className="stat-item">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 15.36C7.768 15.36 7.544 15.296 7.352 15.176C6.624 14.688 5.928 14.208 5.304 13.768L5.288 13.76C3.712 12.64 2.328 11.648 1.368 10.664C0.28 9.544 0 8.472 0 7.36C0 6.28 0.36 5.288 1.016 4.56C1.68 3.824 2.608 3.376 3.592 3.376C4.312 3.376 4.96 3.624 5.536 4.112C5.824 4.352 6.088 4.64 6.328 4.976C6.44 5.144 6.592 5.36 6.72 5.56C6.848 5.36 6.992 5.144 7.104 4.976C7.344 4.64 7.608 4.352 7.896 4.112C8.472 3.624 9.12 3.376 9.84 3.376C10.824 3.376 11.752 3.824 12.416 4.56C13.072 5.288 13.432 6.28 13.432 7.36C13.432 8.472 13.152 9.544 12.064 10.664C11.104 11.648 9.72 12.64 8.144 13.76L8.128 13.768C7.504 14.208 6.808 14.688 6.08 15.176C5.888 15.296 5.664 15.36 5.432 15.36H8Z" fill="white"/>
                    </svg>
                    {getLikeCount(creator.socialProfiles[0].followers)}
                  </div>
                </div>
                
                {/* Attribution info for Unsplash images */}
                {image.attribution && (
                  <div style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '8px', color: 'white', textShadow: '0 0 2px black' }}>
                    Photo: Lorem Picsum
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
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
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C10.4178 4 8.87104 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 18C10.8133 18 9.65328 17.6481 8.66658 16.9888C7.67989 16.3295 6.91085 15.3925 6.45673 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91825 8.59647 7.75736 7.75736C8.59648 6.91824 9.66558 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45672C15.3925 6.91085 16.3295 7.67988 16.9888 8.66658C17.6481 9.65327 18 10.8133 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM17 11.5H13V7.5H11V13.5H17V11.5Z" fill="currentColor"/>
                      </svg>
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
              </div>
            </div>
          </div>
        );
      case 'messages':
        const mockMessages = getMockMessages(creator);
        const groupedMessages = groupMessagesByDate(mockMessages);
        
        return (
          <div className="sidebar-messages">
            <div className="message-thread">
              {Object.entries(groupedMessages).map(([date, messages]) => (
                <React.Fragment key={date}>
                  <div className="message-date">{date}</div>
                  
                  {messages.map(message => (
                    <div 
                      key={message.id} 
                      className={`message-item ${message.sender === 'manager' ? 'message-outgoing' : 'message-incoming'}`}
                    >
                      <div className="message-avatar">
                        <img 
                          src={message.sender === 'manager' ? '/images/creators/mark.jpg' : creator.profileImage} 
                          alt={message.sender === 'manager' ? 'Mark' : creator.name} 
                        />
                      </div>
                      <div className="message-content">
                        <div className="message-header">
                          <span className="message-sender">
                            {message.sender === 'manager' ? 'You' : creator.name}
                          </span>
                          <span className="message-recipient">
                            to {message.sender === 'manager' ? message.creatorEmail : message.managerEmail}
                          </span>
                        </div>
                        <div className="message-body">
                          {formatMessageContent(message.content, creator.name.split(' ')[0])
                            .split('\n')
                            .map((line, i) => (
                              line.trim() === '' ? <br key={i} /> : <p key={i}>{line}</p>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            
            <div className="message-composer-wrapper">
              <div className="message-composer-options">
                <button className="composer-option">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H9.01" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9H15.01" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="composer-option">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 15L16 10L5 21" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="composer-option">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2V5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9H21" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Schedule</span>
                </button>
                
                <div className="composer-send-options">
                  <span>Send to</span>
                  <div className="send-platform">
                    <img src="/images/icons/Name=tik-tok.svg" alt="TikTok" width="16" height="16" />
                    <span>Tik-Tok</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="message-input-container">
                <div className="message-input" contentEditable="true" data-placeholder={`Hi ${creator.name.split(' ')[0]},`}>Hi {creator.name.split(' ')[0]},</div>
                <button className="send-button">
                  <span>Send</span>
                </button>
              </div>
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
    <div className={`profile-drawer-overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}>
      <div 
        className={`profile-drawer-container ${isOpen ? 'open' : ''} ${drawerState === 'saved' && showSidebar ? 'with-sidebar' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
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
          
          {/* Main content with ref for scroll detection */}
          <div className="profile-drawer-content" ref={contentRef}>
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