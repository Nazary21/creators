import React, { useState } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { Creator } from '@/data/mockData';
import ProfileDrawer from './ProfileDrawer';

interface CreatorCardProps {
  creator: Creator;
  onSaveCreator?: (id: string) => void;
  allCreators?: Creator[]; // Array of all creators for navigation
  index?: number; // Current index in the creators array
}

const CreatorCard: React.FC<CreatorCardProps> = ({ 
  creator, 
  onSaveCreator,
  allCreators = [],
  index = 0 
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // Add state to track the currently displayed creator
  const [currentCreator, setCurrentCreator] = useState<Creator>(creator);
  // Track the current index separately so it updates as we navigate
  const [currentIndex, setCurrentIndex] = useState<number>(index);

  // Function to get a content image path for a creator
  const getContentImagePath = (creatorId: string, index: number) => {
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

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentCreator(creator); // Reset to the original creator when opening
    setCurrentIndex(index); // Reset to the original index
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleSaveCreator = (id: string) => {
    if (onSaveCreator) {
      onSaveCreator(id);
    }
  };

  // Navigation handlers
  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    
    if (allCreators.length <= 1) return;
    
    // Calculate the previous index based on the current index (not the original index)
    const prevIndex = currentIndex <= 0 ? allCreators.length - 1 : currentIndex - 1;
    const prevCreator = allCreators[prevIndex];
    
    // Update both the creator and the index
    setCurrentCreator(prevCreator);
    setCurrentIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    
    if (allCreators.length <= 1) return;
    
    // Calculate the next index based on the current index (not the original index)
    const nextIndex = (currentIndex + 1) % allCreators.length;
    const nextCreator = allCreators[nextIndex];
    
    // Update both the creator and the index
    setCurrentCreator(nextCreator);
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <div className="block" onClick={handleCardClick}>
        <div className="creator-card">
          <div className="creator-card-header">
            {/* Avatar */}
            <div className="creator-avatar">
              <img 
                src={creator.profileImage || `https://source.unsplash.com/random/160x160/?portrait&sig=${creator.id}`}
                alt={creator.name}
              />
            </div>
            
            <div className="creator-info">
              {/* Name and verification */}
              <div className="creator-name-row">
                <h3 className="creator-name">{creator.name}</h3>
                {creator.verified && <CheckCircleFilled className="verified-badge" />}
              </div>
              
              {/* Age, gender, location */}
              <div className="creator-details">
                {creator.age}, {creator.gender}
                <br />
                {creator.location}
              </div>
              
              {/* Social stats */}
              <div className="creator-stats">
                <div className="creator-stat">
                  <img src="/images/icons/instagram.svg" alt="Instagram" className="creator-stat-icon" />
                  <span>{creator.instagramFollowers}</span>
                </div>
                
                <div className="creator-stat">
                  <img src="/images/icons/tiktok.svg" alt="TikTok" className="creator-stat-icon" />
                  <span>{creator.tiktokFollowers}</span>
                </div>
              </div>
              
              {/* Tags */}
              <div className="creator-tags">
                {creator.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="creator-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content samples */}
          <div className="creator-content">
            <div className="content-grid">
              {creator.contentSamples.slice(0, 2).map((sample, index) => (
                <div key={sample.id} className="content-item">
                  <img 
                    src={getContentImagePath(creator.id, index)} 
                    alt="Content sample" 
                    className="content-image"
                  />
                  
                  <div className="content-overlay">
                    <div className="content-info">
                      {sample.platform === 'instagram' ? (
                        <img src="/images/icons/instagram.svg" alt="Instagram" className="content-platform-icon" />
                      ) : (
                        <img src="/images/icons/tiktok.svg" alt="TikTok" className="content-platform-icon" />
                      )}
                      <span className="content-likes">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="heart-icon">
                          <path d="M8 15.36C7.768 15.36 7.544 15.296 7.352 15.176C6.624 14.688 5.928 14.208 5.304 13.768L5.288 13.76C3.712 12.64 2.328 11.648 1.368 10.664C0.28 9.544 0 8.472 0 7.36C0 6.28 0.36 5.288 1.016 4.56C1.68 3.824 2.608 3.376 3.592 3.376C4.312 3.376 4.96 3.624 5.536 4.112C5.824 4.352 6.088 4.64 6.328 4.976C6.44 5.144 6.592 5.36 6.72 5.56C6.848 5.36 6.992 5.144 7.104 4.976C7.344 4.64 7.608 4.352 7.896 4.112C8.472 3.624 9.12 3.376 9.84 3.376C10.824 3.376 11.752 3.824 12.416 4.56C13.072 5.288 13.432 6.28 13.432 7.36C13.432 8.472 13.152 9.544 12.064 10.664C11.104 11.648 9.72 12.64 8.144 13.76L8.128 13.768C7.504 14.208 6.808 14.688 6.08 15.176C5.888 15.296 5.664 15.36 5.432 15.36H8Z" fill="white"/>
                        </svg>
                        {getLikeCount(sample.followers)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Drawer */}
      {isDrawerOpen && (
        <ProfileDrawer 
          creator={currentCreator} // Use the current creator state instead of the prop
          isOpen={isDrawerOpen} 
          onClose={handleDrawerClose}
          onSave={handleSaveCreator}
          onNext={allCreators.length > 1 ? (e) => handleNext(e) : undefined}
          onPrevious={allCreators.length > 1 ? (e) => handlePrevious(e) : undefined}
        />
      )}
    </>
  );
};

export default CreatorCard; 