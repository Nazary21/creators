// Mock data for Archive.com prototype
// This file contains mock data for creator profiles, social performance metrics, and other data

export interface Creator {
  id: string;
  name: string;
  username: string;
  verified: boolean;
  profileImage: string;
  age: string;
  gender: string;
  location: string;
  status?: string;
  instagramFollowers: string;
  tiktokFollowers: string;
  email: string;
  phone: string;
  tags: string[];
  isSaved?: boolean;
  details: {
    shippingAddress: string;
    contentStyle: string[];
    totalFollowers: string;
    languagesSpoken: string[];
  };
  socialPerformance: {
    allAccounts: string;
    instagram: string;
    tiktok: string;
    youtube: string;
  };
  platformStats: PlatformStats;
  socialProfiles: SocialProfile[];
  contentCount: number;
  contentSamples: ContentSample[];
}

export interface SocialProfile {
  platform: 'instagram' | 'tiktok' | 'youtube';
  username: string;
  url: string;
  followers: string;
  totalPosts: number;
  lastPost: number;
  engagementRate: number;
  emv: string;
  impressions: string;
}

export interface PlatformStats {
  instagram?: {
    followers: string;
    posts: number;
    engagement: string;
    impressions: string;
    reach: string;
    saves: string;
    comments: string;
    views: string;
    emv: string;
  };
  tiktok?: {
    followers: string;
    posts: number;
    engagement: string;
    impressions: string;
    shares: string;
    comments: string;
    likes: string;
    views: string;
    emv: string;
  };
  youtube?: {
    subscribers: string;
    videos: number;
    engagement: string;
    impressions: string;
    likes: string;
    comments: string;
    views: string;
    watchTime: string;
    emv: string;
  };
}

export interface ContentSample {
  id: string;
  platform: 'instagram' | 'tiktok' | 'youtube';
  username: string;
  image: string;
  followers: string;
  likes?: string;
  views?: string;
  comments?: string;
  caption?: string;
  date?: string;
}

export interface Message {
  id: string;
  date: string;
  sender: 'you' | 'creator';
  content: string;
  destination?: string;
  read?: boolean;
  attachments?: string[];
}

export const creators: Creator[] = [
  {
    id: '1',
    name: 'Cheyenne Carder',
    username: 'cheyennecarder',
    verified: true,
    profileImage: '/images/creators/cheyenne.jpg',
    age: '25-34 y.o.',
    gender: 'Female',
    location: 'Los Angeles, California',
    instagramFollowers: '722.5k',
    tiktokFollowers: '1.2M',
    email: 'cheyenne@example.com',
    phone: '+1-222-333-4444',
    tags: ['Outdoor', 'Fitness', 'Travel'],
    isSaved: false,
    details: {
      shippingAddress: '123 Sunset Blvd, Los Angeles, CA 90001, USA',
      contentStyle: ['Entertaining', 'Inspirational'],
      totalFollowers: '1.9M',
      languagesSpoken: ['English', 'Spanish'],
    },
    socialPerformance: {
      allAccounts: '1.9M',
      instagram: '722.5k',
      tiktok: '1.2M',
      youtube: '0',
    },
    platformStats: {
      instagram: {
        followers: '722.5k',
        posts: 85,
        engagement: '3.7%',
        impressions: '120k',
        reach: '95k',
        saves: '2.5k',
        comments: '3.2k',
        views: '89k',
        emv: '$1.2k',
      },
      tiktok: {
        followers: '1.2M',
        posts: 142,
        engagement: '2.9%',
        impressions: '1.5M',
        shares: '32k',
        comments: '45k',
        likes: '258k',
        views: '1.1M',
        emv: '$956',
      }
    },
    socialProfiles: [
      {
        platform: 'instagram',
        username: '@cheyennecarder',
        url: 'https://instagram.com/cheyennecarder',
        followers: '722.5k',
        totalPosts: 85,
        lastPost: 85,
        engagementRate: 3.7,
        emv: '$1.2k',
        impressions: '120k',
      },
      {
        platform: 'tiktok',
        username: '@cheyenne_carder',
        url: 'https://tiktok.com/@cheyenne_carder',
        followers: '1.2M',
        totalPosts: 142,
        lastPost: 142,
        engagementRate: 2.9,
        emv: '$956',
        impressions: '1.5M',
      },
    ],
    contentCount: 227,
    contentSamples: [
      {
        id: 'c1',
        platform: 'instagram',
        username: 'cheyennecarder',
        image: '/images/content/cheyenne1.jpg',
        followers: '722.5k',
      },
      {
        id: 'c2',
        platform: 'instagram',
        username: 'cheyennecarder',
        image: '/images/content/cheyenne2.jpg',
        followers: '722.5k',
      },
    ],
  },
  {
    id: '2',
    name: 'Jaxson Ekstrom Bothman',
    username: 'jaxsonbothman',
    verified: true,
    profileImage: '/images/creators/jaxson.jpg',
    age: '35-44 y.o.',
    gender: 'Male',
    location: 'Allentown, New Mexico',
    instagramFollowers: '722.5k',
    tiktokFollowers: '1.2M',
    email: 'jaxson@example.com',
    phone: '+1-333-444-5555',
    tags: ['Hiking', 'Nature', 'Adventure'],
    details: {
      shippingAddress: '456 Mountain Dr, Allentown, NM 87101, USA',
      contentStyle: ['Educational', 'Inspirational'],
      totalFollowers: '1.9M',
      languagesSpoken: ['English'],
    },
    socialPerformance: {
      allAccounts: '1.9M',
      instagram: '722.5k',
      tiktok: '1.2M',
      youtube: '0',
    },
    platformStats: {
      instagram: {
        followers: '722.5k',
        posts: 92,
        engagement: '3.2%',
        impressions: '109k',
        reach: '95k',
        saves: '1.1k',
        comments: '3.2k',
        views: '89k',
        emv: '$1.1k',
      },
      tiktok: {
        followers: '1.2M',
        posts: 128,
        engagement: '2.2%',
        impressions: '1.1M',
        shares: '32k',
        comments: '45k',
        likes: '258k',
        views: '1.1M',
        emv: '$922',
      }
    },
    socialProfiles: [
      {
        platform: 'instagram',
        username: '@jaxsonbothman',
        url: 'https://instagram.com/jaxsonbothman',
        followers: '722.5k',
        totalPosts: 92,
        lastPost: 92,
        engagementRate: 3.2,
        emv: '$1.1k',
        impressions: '109k',
      },
      {
        platform: 'tiktok',
        username: '@jaxson_bothman',
        url: 'https://tiktok.com/@jaxson_bothman',
        followers: '1.2M',
        totalPosts: 128,
        lastPost: 128,
        engagementRate: 2.2,
        emv: '$922',
        impressions: '1.1M',
      },
    ],
    contentCount: 220,
    contentSamples: [
      {
        id: 'j1',
        platform: 'instagram',
        username: 'jaxsonbothman',
        image: '/images/content/jaxson1.jpg',
        followers: '722.5k',
      },
      {
        id: 'j2',
        platform: 'instagram',
        username: 'jaxsonbothman',
        image: '/images/content/jaxson2.jpg',
        followers: '722.5k',
      },
    ],
  },
  {
    id: '3',
    name: 'Angel Vetrovs',
    username: 'angelvetrovs',
    verified: false,
    profileImage: '/images/creators/angel.jpg',
    age: '25-34 y.o.',
    gender: 'Female',
    location: 'Los Angeles, California',
    instagramFollowers: '722.5k',
    tiktokFollowers: '1.2M',
    email: 'angel@example.com',
    phone: '+1-444-555-6666',
    tags: ['Fitness', 'Outdoor', 'Lifestyle'],
    details: {
      shippingAddress: '789 Beach Ave, Los Angeles, CA 90001, USA',
      contentStyle: ['Entertaining', 'Educational'],
      totalFollowers: '1.9M',
      languagesSpoken: ['English', 'Chinese'],
    },
    socialPerformance: {
      allAccounts: '1.9M',
      instagram: '722.5k',
      tiktok: '1.2M',
      youtube: '0',
    },
    platformStats: {
      instagram: {
        followers: '722.5k',
        posts: 78,
        engagement: '3.5%',
        impressions: '115k',
        reach: '95k',
        saves: '1.3k',
        comments: '3.5k',
        views: '89k',
        emv: '$1.3k',
      },
      tiktok: {
        followers: '1.2M',
        posts: 114,
        engagement: '2.7%',
        impressions: '1.3M',
        shares: '32k',
        comments: '45k',
        likes: '258k',
        views: '1.1M',
        emv: '$890',
      }
    },
    socialProfiles: [
      {
        platform: 'instagram',
        username: '@angelvetrovs',
        url: 'https://instagram.com/angelvetrovs',
        followers: '722.5k',
        totalPosts: 78,
        lastPost: 78,
        engagementRate: 3.5,
        emv: '$1.3k',
        impressions: '115k',
      },
      {
        platform: 'tiktok',
        username: '@angel_vetrovs',
        url: 'https://tiktok.com/@angel_vetrovs',
        followers: '1.2M',
        totalPosts: 114,
        lastPost: 114,
        engagementRate: 2.7,
        emv: '$890',
        impressions: '1.3M',
      },
    ],
    contentCount: 192,
    contentSamples: [
      {
        id: 'a1',
        platform: 'instagram',
        username: 'angelvetrovs',
        image: '/images/content/angel1.jpg',
        followers: '722.5k',
      },
      {
        id: 'a2',
        platform: 'instagram',
        username: 'angelvetrovs',
        image: '/images/content/angel2.jpg',
        followers: '722.5k',
      },
    ],
  },
  {
    id: '4',
    name: 'Susanna Lee',
    username: 'susannalee',
    verified: true,
    profileImage: '/images/creators/susanna.jpg',
    age: '25-34 y.o.',
    gender: 'Female',
    location: 'New York, NY',
    status: 'Open to cooperation',
    instagramFollowers: '2.4M',
    tiktokFollowers: '1.1M',
    email: 'john@doe.com',
    phone: '+1-255-647-2543',
    tags: ['Label One'],
    details: {
      shippingAddress: '13th Street. 47 W 13th St, New York, NY 10011, USA',
      contentStyle: ['Entertaining', 'Inspirational', 'Educational'],
      totalFollowers: '221.7k',
      languagesSpoken: ['Chinese', 'Spanish', 'English'],
    },
    socialPerformance: {
      allAccounts: '4.5M',
      instagram: '2.4M',
      tiktok: '1.1M',
      youtube: '400K',
    },
    platformStats: {
      instagram: {
        followers: '1.1M',
        posts: 92,
        engagement: '3.2%',
        impressions: '109mil',
        reach: '95k',
        saves: '1.1',
        comments: '3.2k',
        views: '89k',
        emv: '$1.1',
      },
      tiktok: {
        followers: '922k',
        posts: 128,
        engagement: '2.2%',
        impressions: '1mil',
        shares: '32k',
        comments: '45k',
        likes: '258k',
        views: '1.1M',
        emv: '$922',
      }
    },
    socialProfiles: [
      {
        platform: 'instagram',
        username: '@kyliejenner',
        url: 'https://instagram.com/kyliejenner',
        followers: '1.1M',
        totalPosts: 92,
        lastPost: 92,
        engagementRate: 3.2,
        emv: '$1.1',
        impressions: '109mil',
      },
      {
        platform: 'tiktok',
        username: '@kylie_jenner',
        url: 'https://tiktok.com/@kylie_jenner',
        followers: '922k',
        totalPosts: 128,
        lastPost: 128,
        engagementRate: 2.2,
        emv: '$922',
        impressions: '1mil',
      },
    ],
    contentCount: 220,
    contentSamples: [
      {
        id: 's1',
        platform: 'instagram',
        username: 'kyliejenner',
        image: '/images/content/kylie1.jpg',
        followers: '400.2m',
      },
      {
        id: 's2',
        platform: 'instagram',
        username: 'kyliejenner',
        image: '/images/content/kylie2.jpg',
        followers: '400.2m',
      },
      {
        id: 's3',
        platform: 'instagram',
        username: 'kyliejenner',
        image: '/images/content/kylie3.jpg',
        followers: '400.2m',
      },
    ],
  },
];

export const messages: Message[] = [
  {
    id: 'm1',
    date: '5 Mar at 10:34am',
    sender: 'you',
    content: 'Hi Susanna,\n\nI hope this message finds you well! I\'m reaching out one more time about our collaboration opportunity at [Brand Name].\n\nWe\'re big fans of your work and believe your audience would love our [product/service]. This partnership would include:\n\n• [Compensation detail]\n• [Product detail]\n• [Creative freedom detail]\n• [Timeline detail]\n\nWe need to finalize our creator roster by [date]. If we don\'t hear back, we\'ll assume the timing isn\'t right, but we\'d love to keep you in mind for future opportunities.\n\nAll the best,\nMark',
    destination: 'to John@doe.com',
  },
  {
    id: 'm2',
    date: '1 Mar at 9:00am',
    sender: 'you',
    content: 'Hi Susanna,\n\nI\'m [Your Name] from [Brand Name]. We love your content and would like to discuss a potential collaboration.\n\nWould you be interested in learning more?\n\nBest,\n[Your Name]',
    destination: 'to Instagram DM',
  },
];

// Create dummy creator search results based on the query
export const searchCreators = (query: string): Creator[] => {
  if (!query) return creators;
  
  const lowerQuery = query.toLowerCase();
  return creators.filter(creator => 
    creator.name.toLowerCase().includes(lowerQuery) || 
    creator.username.toLowerCase().includes(lowerQuery) ||
    creator.location.toLowerCase().includes(lowerQuery) ||
    creator.details.contentStyle.some(style => style.toLowerCase().includes(lowerQuery))
  );
}; 