/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleFilled, PlusCircleOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Creator } from '@/data/mockData';
import ProfileDrawer from './ProfileDrawer';
import { fetchUnsplashImage } from '@/utils/imageUtils';

interface CreatorCardProps {
  creator: Creator;
  onSaveCreator?: (id: string) => void;
  allCreators?: Creator[]; // Array of all creators for navigation
  index?: number; // Current index in the creators array
}

// Interface for image with attribution info
interface UnsplashImage {
  url: string;
  isLoading: boolean;
  attribution?: {
    name: string;
    username: string;
    link: string;
  }
}

const CreatorCard: React.FC<CreatorCardProps> = ({ 
  creator, 
  onSaveCreator,
  allCreators = [],
  index = 0 
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // Track the current index for navigation
  const [currentIndex, setCurrentIndex] = useState<number>(index);
  // Remove the currentCreator state and just pass creator directly to ProfileDrawer
  const [contentImages, setContentImages] = useState<UnsplashImage[]>([]);
  const imagesLoaded = useRef(false);

  // Effect to load images when component mounts
  useEffect(() => {
    if (!imagesLoaded.current) {
      const loadImages = async () => {
        // Initialize with loading placeholders
        const initialImages = creator.contentSamples.slice(0, 2).map(() => ({
          url: 'https://via.placeholder.com/640x800?text=Loading...',
          isLoading: true
        }));
        setContentImages(initialImages);
        
        // Load images from Unsplash or static sources
        const loadedImages = await Promise.all(
          creator.contentSamples.slice(0, 2).map((_, sampleIndex) => loadContentImage(creator.id, sampleIndex))
        );
        
        setContentImages(loadedImages);
        imagesLoaded.current = true;
      };
      
      loadImages();
    }
  }, [creator.id, creator.contentSamples]);

  // Reset image loading when creator changes
  useEffect(() => {
    // Simply reset images loaded flag when creator changes
    imagesLoaded.current = false;
  }, [creator.id]);

  // Function to load content image
  const loadContentImage = async (creatorId: string, index: number): Promise<UnsplashImage> => {
    // For all creators, use the API with their tags
    if (creator.tags && creator.tags.length > 0) {
      try {
        // Get tag based on creator and index
        const tagIndex = (parseInt(creatorId) + index) % creator.tags.length;
        const primaryTag = creator.tags[tagIndex].toLowerCase();
        
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

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
    
    // Calculate the previous index based on the current index
    const prevIndex = currentIndex <= 0 ? allCreators.length - 1 : currentIndex - 1;
    
    // Set the new index
    setCurrentIndex(prevIndex);
    
    // Reset images loaded flag
    imagesLoaded.current = false;
    
    console.log(`Navigating to previous: ${allCreators[prevIndex].name} (ID: ${allCreators[prevIndex].id}), Index: ${prevIndex}`);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    
    if (allCreators.length <= 1) return;
    
    // Calculate the next index based on the current index
    const nextIndex = (currentIndex + 1) % allCreators.length;
    
    // Set the new index
    setCurrentIndex(nextIndex);
    
    // Reset images loaded flag
    imagesLoaded.current = false;
    
    console.log(`Navigating to next: ${allCreators[nextIndex].name} (ID: ${allCreators[nextIndex].id}), Index: ${nextIndex}`);
  };

  return (
    <>
      <div className="block" onClick={handleCardClick}>
        <div className="creator-card">
          <div className="creator-card-header">
            {/* Avatar */}
            <div className="creator-avatar">
              <img 
                src={creator.profileImage}
                alt={creator.name}
              />
            </div>
            
            <div className="creator-info">
              {/* Name and verification */}
              <div className="creator-name-row">
                <h3 className="creator-name">{creator.name}</h3>
                {creator.verified && <CheckCircleFilled className="creator-verified-badge-inline" />}
                
                {/* Action buttons */}
                <div className="creator-action-buttons">
                  <button className="creator-action-button" onClick={(e) => e.stopPropagation()}>
                    <PlusCircleOutlined />
                  </button>
                  <button className="creator-action-button" onClick={(e) => e.stopPropagation()}>
                    <EllipsisOutlined />
                  </button>
                </div>
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
              {contentImages.map((image, index) => (
                <div key={index} className="content-item">
                  <img 
                    src={image.url} 
                    alt="Content sample" 
                    className="content-image"
                  />
                  
                  <div className="content-overlay">
                    <div className="content-info">
                      <span className="content-likes">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="heart-icon">
                          <path d="M8 15.36C7.768 15.36 7.544 15.296 7.352 15.176C6.624 14.688 5.928 14.208 5.304 13.768L5.288 13.76C3.712 12.64 2.328 11.648 1.368 10.664C0.28 9.544 0 8.472 0 7.36C0 6.28 0.36 5.288 1.016 4.56C1.68 3.824 2.608 3.376 3.592 3.376C4.312 3.376 4.96 3.624 5.536 4.112C5.824 4.352 6.088 4.64 6.328 4.976C6.44 5.144 6.592 5.36 6.72 5.56C6.848 5.36 6.992 5.144 7.104 4.976C7.344 4.64 7.608 4.352 7.896 4.112C8.472 3.624 9.12 3.376 9.84 3.376C10.824 3.376 11.752 3.824 12.416 4.56C13.072 5.288 13.432 6.28 13.432 7.36C13.432 8.472 13.152 9.544 12.064 10.664C11.104 11.648 9.72 12.64 8.144 13.76L8.128 13.768C7.504 14.208 6.808 14.688 6.08 15.176C5.888 15.296 5.664 15.36 5.432 15.36H8Z" fill="white"/>
                        </svg>
                        {getLikeCount(creator.contentSamples[index]?.followers || creator.instagramFollowers)}
                      </span>
                    </div>
                    
                    {/* Attribution info for Unsplash images */}
                    {image.attribution && (
                      <div style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '7px', color: 'white', textShadow: '0 0 2px black' }}>
                        Photo: {image.attribution.name}
                      </div>
                    )}
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
          creator={{...allCreators[currentIndex]}} // Create a new object reference to force React to update
          isOpen={isDrawerOpen} 
          onClose={handleDrawerClose}
          onSave={handleSaveCreator}
          onNext={allCreators.length > 1 ? handleNext : undefined}
          onPrevious={allCreators.length > 1 ? handlePrevious : undefined}
        />
      )}
    </>
  );
};

export default CreatorCard; 