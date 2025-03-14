import { NextRequest, NextResponse } from 'next/server';

/**
 * API route to fetch images with a robust assignment system
 * Uses a deterministic approach to select unique images for each creator
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const sig = searchParams.get('sig'); // Unique signature for consistent image selection
  
  if (!query) {
    return NextResponse.json(
      { error: 'Search query is required' },
      { status: 400 }
    );
  }
  
  try {
    // Extract creator ID and content index from signature
    // Format expected: "creatorId-contentIndex"
    let creatorId = 0;
    let contentIndex = 0;
    
    if (sig && sig.includes('-')) {
      const parts = sig.split('-');
      creatorId = parseInt(parts[0]) || 0;
      contentIndex = parseInt(parts[1]) || 0;
    }
    
    const searchTerms = query.split(',');
    const primaryTerm = searchTerms[0].trim().toLowerCase();
    
    // =========== CATEGORIZED IMAGE COLLECTIONS ===========
    
    // Fashion/Style images - well-dressed people, clothing, etc.
    const fashionImages = [
      'https://picsum.photos/id/64/800/1000',  // Man in suit
      'https://picsum.photos/id/21/800/1000',  // Fashion model
      'https://picsum.photos/id/331/800/1000', // Stylish clothing
      'https://picsum.photos/id/320/800/1000', // Accessories
      'https://picsum.photos/id/325/800/1000', // High fashion
      'https://picsum.photos/id/338/800/1000', // Elegance
      'https://picsum.photos/id/342/800/1000', // Modern style
      'https://picsum.photos/id/349/800/1000', // Classic attire
      'https://picsum.photos/id/360/800/1000', // Trendy fashion
      'https://picsum.photos/id/372/800/1000', // Contemporary style
      'https://picsum.photos/id/375/800/1000', // Urban fashion
      'https://picsum.photos/id/43/800/1000',  // Elegant look
      'https://picsum.photos/id/240/800/1000', // Professional attire
    ];
    
    // Nature/Outdoor images - landscapes, wildlife, etc.
    const natureImages = [
      'https://picsum.photos/id/10/800/1000',  // Forest
      'https://picsum.photos/id/15/800/1000',  // Mountains
      'https://picsum.photos/id/17/800/1000',  // Waterfall
      'https://picsum.photos/id/18/800/1000',  // Beach
      'https://picsum.photos/id/29/800/1000',  // Lake view
      'https://picsum.photos/id/65/800/1000',  // Scenery
      'https://picsum.photos/id/119/800/1000', // Landscape
      'https://picsum.photos/id/133/800/1000', // Wilderness
      'https://picsum.photos/id/143/800/1000', // Mountain peak
      'https://picsum.photos/id/164/800/1000', // Ocean
      'https://picsum.photos/id/184/800/1000', // Hiking trail
      'https://picsum.photos/id/190/800/1000', // Forest path
      'https://picsum.photos/id/197/800/1000', // Valley
    ];
    
    // Travel/Adventure images - cities, landmarks, activities
    const travelImages = [
      'https://picsum.photos/id/318/800/1000', // City view
      'https://picsum.photos/id/319/800/1000', // Landmark
      'https://picsum.photos/id/321/800/1000', // Tourist spot
      'https://picsum.photos/id/324/800/1000', // Historic site
      'https://picsum.photos/id/327/800/1000', // Architecture
      'https://picsum.photos/id/350/800/1000', // Street scene
      'https://picsum.photos/id/357/800/1000', // Famous building
      'https://picsum.photos/id/361/800/1000', // Urban landscape
      'https://picsum.photos/id/364/800/1000', // City skyline
      'https://picsum.photos/id/385/800/1000', // Cultural site
      'https://picsum.photos/id/392/800/1000', // World wonder
      'https://picsum.photos/id/188/800/1000', // Exotic location
      'https://picsum.photos/id/177/800/1000', // Travel destination
    ];
    
    // Urban/City images - street scenes, urban life
    const urbanImages = [
      'https://picsum.photos/id/307/800/1000', // City street
      'https://picsum.photos/id/308/800/1000', // Urban setting
      'https://picsum.photos/id/309/800/1000', // Metropolitan view
      'https://picsum.photos/id/310/800/1000', // Downtown
      'https://picsum.photos/id/311/800/1000', // City life
      'https://picsum.photos/id/313/800/1000', // Urban architecture
      'https://picsum.photos/id/314/800/1000', // Street photography
      'https://picsum.photos/id/316/800/1000', // City vibes
      'https://picsum.photos/id/322/800/1000', // Urban exploration
      'https://picsum.photos/id/326/800/1000', // City buildings
      'https://picsum.photos/id/333/800/1000', // Urban landscape
      'https://picsum.photos/id/399/800/1000', // City scene
      'https://picsum.photos/id/249/800/1000', // Urban center
    ];
    
    // Technology/Design images - gadgets, workspaces, designs
    const techDesignImages = [
      'https://picsum.photos/id/1/800/1000',   // Tech workspace
      'https://picsum.photos/id/20/800/1000',  // Computer setup
      'https://picsum.photos/id/25/800/1000',  // Digital design
      'https://picsum.photos/id/60/800/1000',  // Creative space
      'https://picsum.photos/id/180/800/1000', // Modern design
      'https://picsum.photos/id/365/800/1000', // Tech gadget
      'https://picsum.photos/id/370/800/1000', // Design elements
      'https://picsum.photos/id/380/800/1000', // Tech innovation
      'https://picsum.photos/id/42/800/1000',  // Digital art
      'https://picsum.photos/id/48/800/1000',  // Creative tech
      'https://picsum.photos/id/96/800/1000',  // Design workspace
      'https://picsum.photos/id/102/800/1000', // Modern tech
      'https://picsum.photos/id/250/800/1000', // Minimalist design
    ];
    
    // Lifestyle/Wellness images - healthy living, relaxation
    const lifestyleImages = [
      'https://picsum.photos/id/312/800/1000', // Wellness
      'https://picsum.photos/id/315/800/1000', // Healthy living
      'https://picsum.photos/id/317/800/1000', // Relaxation
      'https://picsum.photos/id/329/800/1000', // Self-care
      'https://picsum.photos/id/330/800/1000', // Mindfulness
      'https://picsum.photos/id/335/800/1000', // Peaceful setting
      'https://picsum.photos/id/337/800/1000', // Balanced life
      'https://picsum.photos/id/340/800/1000', // Yoga
      'https://picsum.photos/id/348/800/1000', // Meditation
      'https://picsum.photos/id/173/800/1000', // Outdoor activity
      'https://picsum.photos/id/128/800/1000', // Healthy food
      'https://picsum.photos/id/292/800/1000', // Fitness
      'https://picsum.photos/id/225/800/1000', // Good vibes
    ];
    
    // Gaming/Entertainment images
    const gamingImages = [
      'https://picsum.photos/id/141/800/1000', // Gaming
      'https://picsum.photos/id/142/800/1000', // Entertainment
      'https://picsum.photos/id/160/800/1000', // Fun activities
      'https://picsum.photos/id/200/800/1000', // Gaming setup
      'https://picsum.photos/id/201/800/1000', // Game night
      'https://picsum.photos/id/202/800/1000', // Entertainment center
      'https://picsum.photos/id/203/800/1000', // Arcade
      'https://picsum.photos/id/204/800/1000', // Console gaming
      'https://picsum.photos/id/205/800/1000', // Gaming culture
      'https://picsum.photos/id/206/800/1000', // Board games
      'https://picsum.photos/id/207/800/1000', // Game art
      'https://picsum.photos/id/229/800/1000', // Competitive gaming
      'https://picsum.photos/id/285/800/1000', // Gaming community
    ];
    
    // Default collection of diverse images for any other category
    const defaultImages = [
      'https://picsum.photos/id/27/800/1000',
      'https://picsum.photos/id/37/800/1000',
      'https://picsum.photos/id/53/800/1000',
      'https://picsum.photos/id/76/800/1000',
      'https://picsum.photos/id/91/800/1000',
      'https://picsum.photos/id/100/800/1000',
      'https://picsum.photos/id/103/800/1000',
      'https://picsum.photos/id/111/800/1000',
      'https://picsum.photos/id/120/800/1000',
      'https://picsum.photos/id/136/800/1000',
      'https://picsum.photos/id/220/800/1000',
      'https://picsum.photos/id/237/800/1000',
      'https://picsum.photos/id/256/800/1000',
    ];
    
    // =========== SELECTING THE RIGHT CATEGORY ===========
    
    // Select the category based on the search term
    let selectedCategory = defaultImages;
    
    if (primaryTerm.includes('fashion') || primaryTerm.includes('style') || 
        primaryTerm.includes('clothing') || primaryTerm.includes('beauty')) {
      selectedCategory = fashionImages;
    } 
    else if (primaryTerm.includes('nature') || primaryTerm.includes('outdoor') || 
             primaryTerm.includes('forest') || primaryTerm.includes('wildlife')) {
      selectedCategory = natureImages;
    }
    else if (primaryTerm.includes('travel') || primaryTerm.includes('adventure') || 
             primaryTerm.includes('explore') || primaryTerm.includes('vacation')) {
      selectedCategory = travelImages;
    }
    else if (primaryTerm.includes('urban') || primaryTerm.includes('city') || 
             primaryTerm.includes('street') || primaryTerm.includes('downtown')) {
      selectedCategory = urbanImages;
    }
    else if (primaryTerm.includes('tech') || primaryTerm.includes('design') || 
             primaryTerm.includes('digital') || primaryTerm.includes('creative')) {
      selectedCategory = techDesignImages;
    }
    else if (primaryTerm.includes('gaming') || primaryTerm.includes('game') || 
             primaryTerm.includes('entertainment') || primaryTerm.includes('fun')) {
      selectedCategory = gamingImages;
    }
    else if (primaryTerm.includes('lifestyle') || primaryTerm.includes('wellness') || 
             primaryTerm.includes('health') || primaryTerm.includes('fitness')) {
      selectedCategory = lifestyleImages;
    }
    
    // =========== DETERMINISTIC IMAGE SELECTION ===========
    
    // To ensure each creator gets a unique but consistent set of images:
    // 1. Calculate a base index using the creator ID
    // 2. Add the content index to get different images for each content piece
    // 3. Take the modulo with the category length to stay within bounds
    
    // This formula ensures different creators get different images even for the same tags
    const baseIndex = (creatorId * 7) % selectedCategory.length;
    const finalIndex = (baseIndex + contentIndex * 3) % selectedCategory.length;
    
    // Select the image
    const imageUrl = selectedCategory[finalIndex];
    
    // Return the selected image URL
    return NextResponse.json({
      url: imageUrl,
      alt: `${primaryTerm} image for creator ${creatorId}`,
      attribution: {
        name: "Lorem Picsum",
        username: "picsum",
        link: "https://picsum.photos"
      }
    });
    
  } catch (error) {
    console.error('Error serving image:', error);
    
    // Provide a fallback image URL that's guaranteed to work
    return NextResponse.json({
      url: 'https://picsum.photos/800/1000?grayscale',
      alt: "Fallback image",
      attribution: {
        name: "Lorem Picsum",
        username: "picsum",
        link: "https://picsum.photos"
      }
    });
  }
} 