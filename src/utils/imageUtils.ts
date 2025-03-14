/**
 * Fetch an image from Unsplash via our API endpoint
 * @param tag Primary tag for the image search
 * @param secondaryTag Optional secondary tag to refine the search
 * @param signature Unique identifier for the image (for consistent results)
 * @returns Promise with the image data
 */
export async function fetchUnsplashImage(
  tag: string,
  secondaryTag?: string,
  signature?: string
): Promise<{
  url: string;
  alt?: string;
  attribution?: {
    name: string;
    username: string;
    link: string;
  };
}> {
  // Build the search query from the tags
  const query = secondaryTag ? `${tag},${secondaryTag}` : tag;
  
  try {
    // Construct the API URL with search parameters
    const url = new URL('/api/unsplash', window.location.origin);
    url.searchParams.append('query', query);
    
    if (signature) {
      url.searchParams.append('sig', signature);
    }
    
    // Fetch the image data from our API
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching image:', error);
    // Fallback to a placeholder if the API fails
    return {
      url: 'https://via.placeholder.com/640x800?text=Image+Loading+Error'
    };
  }
}

/**
 * Get an image URL for a creator's content
 * This returns immediately with a loading placeholder and updates later
 * @param creatorId The creator's ID
 * @param index The index of the content (for multiple content pieces)
 * @param tags The creator's tags array
 * @returns An object with the image URL and a load function
 */
export function getCreatorContentImage(
  creatorId: string,
  index: number,
  tags: string[]
) {
  // For static images (creators 1-4), return the static path
  if (parseInt(creatorId) <= 4) {
    // Return placeholder during loading
    return {
      url: `/images/content/creator${creatorId}-${index + 1}.jpg`,
      load: async () => `/images/content/creator${creatorId}-${index + 1}.jpg`
    };
  }
  
  // Placeholder during loading
  const placeholder = 'https://via.placeholder.com/640x800?text=Loading+Image';
  
  // Function to load the actual image
  const loadImage = async () => {
    if (!tags || tags.length === 0) {
      return placeholder;
    }
    
    // Get tag based on creator and index
    const tagIndex = (parseInt(creatorId) + index) % tags.length;
    const primaryTag = tags[tagIndex].toLowerCase();
    
    // Secondary categories to add variety
    const categories = ['portrait', 'lifestyle', 'travel', 'fashion', 'fitness', 'food', 
                      'photography', 'adventure', 'urban', 'nature', 'art'];
    const secondaryTag = categories[index % categories.length];
    
    // Signature for consistent image selection
    const signature = `${creatorId}-${index}`;
    
    // Get image from Unsplash
    const imageData = await fetchUnsplashImage(primaryTag, secondaryTag, signature);
    return imageData.url;
  };
  
  return {
    url: placeholder,
    load: loadImage
  };
} 