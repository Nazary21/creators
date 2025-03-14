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

// Original creators
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
    status: 'Open to cooperation',
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
        posts: 567,
        engagement: '4.7%',
        impressions: '1.2M',
        reach: '900k',
        saves: '50k',
        comments: '42k',
        views: '2.4M',
        emv: '$22.5k',
      },
      tiktok: {
        followers: '1.2M',
        posts: 230,
        engagement: '8.2%',
        impressions: '5.8M',
        shares: '125k',
        comments: '87k',
        likes: '2.3M',
        views: '12.6M',
        emv: '$45.8k',
      },
    },
    socialProfiles: [
      {
        platform: 'instagram',
        username: '@cheyennecarder',
        url: 'https://instagram.com/cheyennecarder',
        followers: '722.5k',
        totalPosts: 567,
        lastPost: 1,
        engagementRate: 4.7,
        emv: '$22.5k',
        impressions: '1.2M',
      },
      {
        platform: 'tiktok',
        username: '@cheyennecarder',
        url: 'https://tiktok.com/@cheyennecarder',
        followers: '1.2M',
        totalPosts: 230,
        lastPost: 1,
        engagementRate: 8.2,
        emv: '$45.8k',
        impressions: '5.8M',
      },
    ],
    contentCount: 797,
    contentSamples: [
      {
        id: '1-1',
        platform: 'instagram',
        username: '@cheyennecarder',
        image: 'https://source.unsplash.com/random/640x800/?outdoor,fitness&sig=1-1',
        followers: '722.5k',
        likes: '95.4k',
        comments: '1.2k',
        caption: 'Morning hike in the mountains! #adventure #fitness',
        date: '1h ago',
      },
      {
        id: '1-2',
        platform: 'tiktok',
        username: '@cheyennecarder',
        image: 'https://source.unsplash.com/random/640x800/?travel,adventure&sig=1-2',
        followers: '1.2M',
        views: '4.6M',
        likes: '850k',
        comments: '14.2k',
        caption: 'Beach workout routine! 🌊💪 #fitness #beachlife',
        date: '2d ago',
      },
    ],
  },
  {
    id: '2',
    name: 'Jaxson Ekstrom Bothman',
    username: 'jaxsonbothman',
    verified: true,
    profileImage: '/images/creators/jaxson.jpg',
    age: '18-24 y.o.',
    gender: 'Male',
    location: 'New York, NY',
    status: 'Available only for paid jobs',
    instagramFollowers: '458.3k',
    tiktokFollowers: '1.8M',
    email: 'jaxson@example.com',
    phone: '+1-555-444-3333',
    tags: ['Urban', 'Lifestyle', 'Fashion'],
    isSaved: false,
    details: {
      shippingAddress: '456 5th Avenue, New York, NY 10018, USA',
      contentStyle: ['Raw', 'Authentic'],
      totalFollowers: '2.3M',
      languagesSpoken: ['English', 'French'],
    },
    socialPerformance: {
      allAccounts: '2.3M',
      instagram: '458.3k',
      tiktok: '1.8M',
      youtube: '0',
    },
    platformStats: {
      instagram: {
        followers: '458.3k',
        posts: 432,
        engagement: '5.2%',
        impressions: '980k',
        reach: '750k',
        saves: '38k',
        comments: '29k',
        views: '1.9M',
        emv: '$18.2k',
      },
      tiktok: {
        followers: '1.8M',
        posts: 285,
        engagement: '9.5%',
        impressions: '7.2M',
        shares: '180k',
        comments: '95k',
        likes: '3.5M',
        views: '15.8M',
        emv: '$52.5k',
      },
    },
    socialProfiles: [
      {
        platform: 'instagram',
        username: '@jaxsonbothman',
        url: 'https://instagram.com/jaxsonbothman',
        followers: '458.3k',
        totalPosts: 432,
        lastPost: 2,
        engagementRate: 5.2,
        emv: '$18.2k',
        impressions: '980k',
      },
      {
        platform: 'tiktok',
        username: '@jaxsonbothman',
        url: 'https://tiktok.com/@jaxsonbothman',
        followers: '1.8M',
        totalPosts: 285,
        lastPost: 1,
        engagementRate: 9.5,
        emv: '$52.5k',
        impressions: '7.2M',
      },
    ],
    contentCount: 717,
    contentSamples: [
      {
        id: '2-1',
        platform: 'instagram',
        username: '@jaxsonbothman',
        image: 'https://source.unsplash.com/random/640x800/?urban,fashion&sig=2-1',
        followers: '458.3k',
        likes: '78.2k',
        comments: '1.6k',
        caption: 'NYC street style 🌃 #fashion #streetwear',
        date: '3h ago',
      },
      {
        id: '2-2',
        platform: 'tiktok',
        username: '@jaxsonbothman',
        image: 'https://source.unsplash.com/random/640x800/?lifestyle,city&sig=2-2',
        followers: '1.8M',
        views: '5.2M',
        likes: '1.1M',
        comments: '18.7k',
        caption: 'Day in my life: NYC edition 🗽 #lifestyle #dayinmylife',
        date: '1d ago',
      },
    ],
  },
  {
    id: '3',
    name: 'Angel Vetrovs',
    username: 'angelvetrovs',
    verified: true,
    profileImage: '/images/creators/angel.jpg',
    age: '18-24 y.o.',
    gender: 'Female',
    location: 'Austin, Texas',
    status: 'Open to cooperation',
    instagramFollowers: '342.8k',
    tiktokFollowers: '552.3k',
    email: 'angel@example.com',
    phone: '+1-444-555-6666',
    tags: ['Music', 'Dance', 'Art'],
    isSaved: false,
    details: {
      shippingAddress: '789 River St, Austin, TX 78701, USA',
      contentStyle: ['Artistic', 'Expressive'],
      totalFollowers: '895.1k',
      languagesSpoken: ['English', 'Russian'],
    },
    socialPerformance: {
      allAccounts: '895.1k',
      instagram: '342.8k',
      tiktok: '552.3k',
      youtube: '0',
    },
    platformStats: {
      instagram: {
        followers: '342.8k',
        posts: 356,
        engagement: '6.1%',
        impressions: '845k',
        reach: '580k',
        saves: '27k',
        comments: '22k',
        views: '1.6M',
        emv: '$15.4k',
      },
      tiktok: {
        followers: '552.3k',
        posts: 218,
        engagement: '10.2%',
        impressions: '3.2M',
        shares: '105k',
        comments: '68k',
        likes: '1.8M',
        views: '9.2M',
        emv: '$32.7k',
      },
    },
    socialProfiles: [
      {
        platform: 'instagram',
        username: '@angelvetrovs',
        url: 'https://instagram.com/angelvetrovs',
        followers: '342.8k',
        totalPosts: 356,
        lastPost: 1,
        engagementRate: 6.1,
        emv: '$15.4k',
        impressions: '845k',
      },
      {
        platform: 'tiktok',
        username: '@angelvetrovs',
        url: 'https://tiktok.com/@angelvetrovs',
        followers: '552.3k',
        totalPosts: 218,
        lastPost: 1,
        engagementRate: 10.2,
        emv: '$32.7k',
        impressions: '3.2M',
      },
    ],
    contentCount: 574,
    contentSamples: [
      {
        id: '3-1',
        platform: 'instagram',
        username: '@angelvetrovs',
        image: 'https://source.unsplash.com/random/640x800/?music,dance&sig=3-1',
        followers: '342.8k',
        likes: '58.9k',
        comments: '982',
        caption: 'Dance studio vibes 💃 #dance #choreography',
        date: '2h ago',
      },
      {
        id: '3-2',
        platform: 'tiktok',
        username: '@angelvetrovs',
        image: 'https://source.unsplash.com/random/640x800/?art,music&sig=3-2',
        followers: '552.3k',
        views: '3.8M',
        likes: '925k',
        comments: '12.3k',
        caption: 'New dance routine! 🎵 #viral #dancechallenge',
        date: '1d ago',
      },
    ],
  },
  {
    id: '4',
    name: 'Susanna Lee',
    username: 'susannalee',
    verified: false,
    profileImage: '/images/creators/susanna.jpg',
    age: '25-34 y.o.',
    gender: 'Female',
    location: 'Chicago, Illinois',
    status: 'Actively seeking collaborations',
    instagramFollowers: '278.5k',
    tiktokFollowers: '425.2k',
    email: 'susanna@example.com',
    phone: '+1-777-888-9999',
    tags: ['Food', 'Cooking', 'Wellness'],
    isSaved: false,
    details: {
      shippingAddress: '321 Oak Ave, Chicago, IL 60611, USA',
      contentStyle: ['Educational', 'Cozy'],
      totalFollowers: '703.7k',
      languagesSpoken: ['English', 'Korean'],
    },
    socialPerformance: {
      allAccounts: '703.7k',
      instagram: '278.5k',
      tiktok: '425.2k',
      youtube: '0',
    },
    platformStats: {
      instagram: {
        followers: '278.5k',
        posts: 312,
        engagement: '5.8%',
        impressions: '720k',
        reach: '510k',
        saves: '45k',
        comments: '18k',
        views: '1.4M',
        emv: '$12.8k',
      },
      tiktok: {
        followers: '425.2k',
        posts: 195,
        engagement: '8.9%',
        impressions: '2.8M',
        shares: '95k',
        comments: '62k',
        likes: '1.5M',
        views: '8.1M',
        emv: '$28.5k',
      },
    },
    socialProfiles: [
      {
        platform: 'instagram',
        username: '@susannalee',
        url: 'https://instagram.com/susannalee',
        followers: '278.5k',
        totalPosts: 312,
        lastPost: 2,
        engagementRate: 5.8,
        emv: '$12.8k',
        impressions: '720k',
      },
      {
        platform: 'tiktok',
        username: '@susannalee',
        url: 'https://tiktok.com/@susannalee',
        followers: '425.2k',
        totalPosts: 195,
        lastPost: 1,
        engagementRate: 8.9,
        emv: '$28.5k',
        impressions: '2.8M',
      },
    ],
    contentCount: 507,
    contentSamples: [
      {
        id: '4-1',
        platform: 'instagram',
        username: '@susannalee',
        image: 'https://source.unsplash.com/random/640x800/?food,cooking&sig=4-1',
        followers: '278.5k',
        likes: '42.3k',
        comments: '876',
        caption: 'Homemade pasta night! 🍝 #foodie #homecooking',
        date: '5h ago',
      },
      {
        id: '4-2',
        platform: 'tiktok',
        username: '@susannalee',
        image: 'https://source.unsplash.com/random/640x800/?wellness,food&sig=4-2',
        followers: '425.2k',
        views: '2.5M',
        likes: '742k',
        comments: '8.9k',
        caption: '15-minute healthy meal prep! 🥗 #healthyfood #mealprep',
        date: '2d ago',
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

// First names separated by gender
const maleFirstNames = [
  "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles",
  "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua",
  "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Edward", "Jason", "Jeffrey", "Ryan",
  "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon",
  "Benjamin", "Samuel", "Gregory", "Alexander", "Patrick", "Frank", "Raymond", "Jack", "Dennis", "Jerry",
  "Tyler", "Aaron", "Jose", "Adam", "Nathan", "Henry", "Douglas", "Zachary", "Peter", "Kyle",
  "Ethan", "Walter", "Noah", "Jeremy", "Christian", "Keith", "Roger", "Terry", "Gerald", "Harold",
  "Sean", "Austin", "Carl", "Arthur", "Lawrence", "Dylan", "Jesse", "Jordan", "Bryan", "Billy",
  "Joe", "Bruce", "Gabriel", "Logan", "Albert", "Willie", "Alan", "Juan", "Wayne", "Elijah",
  "Randy", "Roy", "Vincent", "Ralph", "Eugene", "Russell", "Bobby", "Mason", "Philip", "Louis"
];

const femaleFirstNames = [
  "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen",
  "Lisa", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Kimberly", "Emily", "Donna", "Michelle",
  "Carol", "Amanda", "Dorothy", "Melissa", "Deborah", "Stephanie", "Rebecca", "Sharon", "Laura", "Cynthia",
  "Kathleen", "Amy", "Angela", "Shirley", "Anna", "Brenda", "Pamela", "Emma", "Nicole", "Helen",
  "Samantha", "Katherine", "Christine", "Debra", "Rachel", "Carolyn", "Janet", "Catherine", "Maria", "Heather",
  "Diane", "Ruth", "Julie", "Olivia", "Joyce", "Virginia", "Victoria", "Kelly", "Lauren", "Christina",
  "Joan", "Evelyn", "Judith", "Megan", "Andrea", "Cheryl", "Hannah", "Jacqueline", "Martha", "Gloria",
  "Teresa", "Ann", "Sara", "Madison", "Frances", "Kathryn", "Janice", "Jean", "Abigail", "Alice",
  "Julia", "Judy", "Sophia", "Grace", "Denise", "Amber", "Doris", "Marilyn", "Danielle", "Beverly",
  "Isabella", "Theresa", "Diana", "Natalie", "Brittany", "Charlotte", "Marie", "Kayla", "Alexis", "Lori"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
  "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Adams"
];

const locations = [
  "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ",
  "Philadelphia, PA", "San Antonio, TX", "San Diego, CA", "Dallas, TX", "San Jose, CA",
  "Austin, TX", "Jacksonville, FL", "Fort Worth, TX", "Columbus, OH", "San Francisco, CA",
  "Charlotte, NC", "Indianapolis, IN", "Seattle, WA", "Denver, CO", "Boston, MA",
  "Portland, OR", "Miami, FL", "Atlanta, GA", "Las Vegas, NV", "Nashville, TN",
  "London, UK", "Paris, France", "Berlin, Germany", "Tokyo, Japan", "Sydney, Australia",
  "Toronto, Canada", "Barcelona, Spain", "Amsterdam, Netherlands", "Rome, Italy", "Stockholm, Sweden"
];

const contentStyles = [
  "Lifestyle", "Travel", "Fashion", "Beauty", "Fitness",
  "Food", "Photography", "Art", "Music", "Gaming",
  "DIY", "Tech", "Education", "Parenting", "Motivation",
  "Comedy", "Sports", "Dance", "Outdoor", "Wellness"
];

const languages = [
  "English", "Spanish", "French", "German", "Italian",
  "Portuguese", "Russian", "Japanese", "Korean", "Chinese",
  "Arabic", "Hindi", "Dutch", "Swedish", "Greek", "Turkish"
];

const tags = [
  "Lifestyle", "Travel", "Fashion", "Beauty", "Fitness",
  "Food", "Photography", "Outdoor", "Adventure", "Urban",
  "DIY", "Tech", "Education", "Motivation", "Comedy",
  "Sports", "Dance", "Wellness", "Health", "Nature",
  "Gaming", "Music", "Family", "Art", "Design",
  "Luxury", "Budget", "Sustainable", "Minimalist", "Vintage"
];

// Arrays for creator avatar paths categorized by gender
const maleAvatars = [
  '/images/creators/luke.jpg',
  '/images/creators/ronald.jpg',
  '/images/creators/josh.jpg',
  '/images/creators/jaxson.jpg',
  '/images/creators/male-uifaces-human-image (7).jpg',
  '/images/creators/male-uifaces-human-image (15).jpg',
  '/images/creators/male-uifaces-human-image (18).jpg',
  '/images/creators/male-uifaces-human-image (19).jpg',
  '/images/creators/male-uifaces-human-image (21).jpg',
  '/images/creators/male-uifaces-human-image (22).jpg',
  '/images/creators/male-uifaces-human-image (24).jpg',
  '/images/creators/male-uifaces-human-image (25).jpg',
  '/images/creators/male-uifaces-human-image (29).jpg',
  '/images/creators/male-uifaces-human-image (30).jpg',
  '/images/creators/male-uifaces-human-image (34).jpg',
  '/images/creators/male-uifaces-human-image (36).jpg',
  '/images/creators/male-uifaces-human-image (37).jpg',
  '/images/creators/male-uifaces-human-image (38).jpg',
  '/images/creators/male-uifaces-human-image (40).jpg',
  '/images/creators/male-uifaces-human-image (42).jpg'
];

const femaleAvatars = [
  '/images/creators/abby.jpg',
  '/images/creators/ammy.jpg',
  '/images/creators/samantha.jpg',
  '/images/creators/cheyenne.jpg',
  '/images/creators/susanna.jpg',
  '/images/creators/angel.jpg',
  '/images/creators/female-uifaces-human-image.jpg',
  '/images/creators/female-uifaces-human-image (1).jpg',
  '/images/creators/female-uifaces-human-image (2).jpg',
  '/images/creators/female-uifaces-human-image (3).jpg',
  '/images/creators/female-uifaces-human-image (4).jpg',
  '/images/creators/female-uifaces-human-image (5).jpg',
  '/images/creators/female-uifaces-human-image (6).jpg',
  '/images/creators/female-uifaces-human-image (8).jpg',
  '/images/creators/female-uifaces-human-image (9).jpg',
  '/images/creators/female-uifaces-human-image (10).jpg',
  '/images/creators/female-uifaces-human-image (11).jpg',
  '/images/creators/female-uifaces-human-image (12).jpg',
  '/images/creators/female-uifaces-human-image (13).jpg',
  '/images/creators/female-uifaces-human-image (14).jpg',
  '/images/creators/female-uifaces-human-image (16).jpg',
  '/images/creators/female-uifaces-human-image (17).jpg',
  '/images/creators/female-uifaces-human-image (20).jpg',
  '/images/creators/female-uifaces-human-image (23).jpg',
  '/images/creators/female-uifaces-human-image (26).jpg',
  '/images/creators/female-uifaces-human-image (27).jpg',
  '/images/creators/female-uifaces-human-image (28).jpg',
  '/images/creators/female-uifaces-human-image (31).jpg',
  '/images/creators/female-uifaces-human-image (32).jpg',
  '/images/creators/female-uifaces-human-image (33).jpg',
  '/images/creators/female-uifaces-human-image (35).jpg',
  '/images/creators/female-uifaces-human-image (39).jpg',
  '/images/creators/female-uifaces-human-image (41).jpg'
];

// Generate random creators
const generateRandomCreators = (count: number): Creator[] => {
  const randomCreators: Creator[] = [];
  
  for (let i = 0; i < count; i++) {
    const id = (creators.length + i + 1).toString();
    
    // Random gender assignment first
    const gender = Math.random() > 0.5 ? 'Male' : 'Female';
    
    // Select gender-appropriate name
    const firstName = gender === 'Male' 
      ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
      : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
    const verified = Math.random() > 0.7; // 30% chance of being verified
    
    // Generate random follower counts
    const instagramFollowersNum = Math.floor(100 + Math.random() * 900) * 1000;
    const tiktokFollowersNum = Math.floor(100 + Math.random() * 900) * 1000;
    const instagramFollowers = (instagramFollowersNum / 1000).toFixed(1) + 'k';
    const tiktokFollowers = (tiktokFollowersNum / 1000).toFixed(1) + 'k';
    const totalFollowers = ((instagramFollowersNum + tiktokFollowersNum) / 1000).toFixed(1) + 'k';
    
    // Random age and gender
    const ageStart = 18 + Math.floor(Math.random() * 12);
    const ageEnd = ageStart + 6;
    const age = `${ageStart}-${ageEnd}`;
    
    // Random location
    const location = locations[Math.floor(Math.random() * locations.length)];
    
    // Random tags (2-4 tags)
    const numTags = 2 + Math.floor(Math.random() * 3);
    const creatorTags: string[] = [];
    for (let j = 0; j < numTags; j++) {
      const tag = tags[Math.floor(Math.random() * tags.length)];
      if (!creatorTags.includes(tag)) {
        creatorTags.push(tag);
      }
    }
    
    // Random content styles (2-3 styles)
    const numStyles = 2 + Math.floor(Math.random() * 2);
    const styles: string[] = [];
    for (let j = 0; j < numStyles; j++) {
      const style = contentStyles[Math.floor(Math.random() * contentStyles.length)];
      if (!styles.includes(style)) {
        styles.push(style);
      }
    }
    
    // Random languages (1-3 languages)
    const numLanguages = 1 + Math.floor(Math.random() * 3);
    const spokenLanguages: string[] = ["English"]; // Always include English
    for (let j = 1; j < numLanguages; j++) {
      const language = languages[Math.floor(Math.random() * languages.length)];
      if (!spokenLanguages.includes(language) && language !== "English") {
        spokenLanguages.push(language);
      }
    }
    
    // Select a gender-appropriate avatar
    const avatarList = gender === 'Male' ? maleAvatars : femaleAvatars;
    const avatarIndex = (parseInt(id) + i) % avatarList.length; // Ensure deterministic selection
    const profileImage = avatarList[avatarIndex];
    
    // Social profiles
    const socialProfiles: SocialProfile[] = [
      {
        platform: 'instagram',
        username: `@${username}`,
        url: `https://instagram.com/${username}`,
        followers: instagramFollowers,
        totalPosts: 100 + Math.floor(Math.random() * 900),
        lastPost: 1 + Math.floor(Math.random() * 14),
        engagementRate: parseFloat((1 + Math.random() * 5).toFixed(2)),
        emv: `$${(1 + Math.random() * 5).toFixed(1)}k`,
        impressions: `${(100 + Math.random() * 900).toFixed(0)}k`
      },
      {
        platform: 'tiktok',
        username: `@${username}`,
        url: `https://tiktok.com/@${username}`,
        followers: tiktokFollowers,
        totalPosts: 50 + Math.floor(Math.random() * 200),
        lastPost: 1 + Math.floor(Math.random() * 7),
        engagementRate: parseFloat((5 + Math.random() * 10).toFixed(2)),
        emv: `$${(2 + Math.random() * 8).toFixed(1)}k`,
        impressions: `${(200 + Math.random() * 800).toFixed(0)}k`
      }
    ];
    
    // Content samples with tag-based images
    const contentSamples: ContentSample[] = [
      {
        id: `${id}-1`,
        platform: 'instagram',
        username: `@${username}`,
        image: `https://source.unsplash.com/random/640x800/?${creatorTags[0].toLowerCase()}&sig=${id}-1`,
        followers: instagramFollowers,
        likes: `${(1 + Math.random() * 5).toFixed(1)}k`,
        comments: `${(50 + Math.random() * 450).toFixed(0)}`
      },
      {
        id: `${id}-2`,
        platform: 'tiktok',
        username: `@${username}`,
        image: `https://source.unsplash.com/random/640x800/?${creatorTags.length > 1 ? creatorTags[1].toLowerCase() : creatorTags[0].toLowerCase()}&sig=${id}-2`,
        followers: tiktokFollowers,
        views: `${(10 + Math.random() * 90).toFixed(1)}k`,
        likes: `${(1 + Math.random() * 9).toFixed(1)}k`
      }
    ];
    
    randomCreators.push({
      id,
      name,
      username,
      verified,
      profileImage,
      age,
      gender,
      location,
      instagramFollowers,
      tiktokFollowers,
      email: `${username}@example.com`,
      phone: `+1 ${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
      tags: creatorTags,
      isSaved: false,
      details: {
        shippingAddress: `${Math.floor(100 + Math.random() * 9900)} ${lastNames[Math.floor(Math.random() * lastNames.length)]} St, ${location}`,
        contentStyle: styles,
        totalFollowers,
        languagesSpoken: spokenLanguages
      },
      socialPerformance: {
        allAccounts: `${((instagramFollowersNum + tiktokFollowersNum) / 1000000).toFixed(1)}M`,
        instagram: instagramFollowers,
        tiktok: tiktokFollowers,
        youtube: `${(50 + Math.random() * 950).toFixed(0)}k`
      },
      platformStats: {
        instagram: {
          followers: instagramFollowers,
          posts: 100 + Math.floor(Math.random() * 900),
          engagement: `${(1 + Math.random() * 5).toFixed(2)}%`,
          impressions: `${(100 + Math.random() * 900).toFixed(0)}k`,
          reach: `${(80 + Math.random() * 400).toFixed(0)}k`,
          saves: `${(5 + Math.random() * 45).toFixed(0)}k`,
          comments: `${(1 + Math.random() * 9).toFixed(1)}k`,
          views: `${(100 + Math.random() * 900).toFixed(0)}k`,
          emv: `$${(1 + Math.random() * 5).toFixed(1)}k`
        },
        tiktok: {
          followers: tiktokFollowers,
          posts: 50 + Math.floor(Math.random() * 200),
          engagement: `${(5 + Math.random() * 10).toFixed(2)}%`,
          impressions: `${(200 + Math.random() * 800).toFixed(0)}k`,
          shares: `${(10 + Math.random() * 90).toFixed(0)}k`,
          comments: `${(5 + Math.random() * 45).toFixed(0)}k`,
          likes: `${(50 + Math.random() * 450).toFixed(0)}k`,
          views: `${(500 + Math.random() * 4500).toFixed(0)}k`,
          emv: `$${(2 + Math.random() * 8).toFixed(1)}k`
        }
      },
      socialProfiles,
      contentCount: 100 + Math.floor(Math.random() * 900),
      contentSamples
    });
  }
  
  return randomCreators;
};

// Generate 38 additional creators (for a total of 42)
const additionalCreators = generateRandomCreators(38);

// Export expanded creators list
export const expandedCreators = [...creators, ...additionalCreators];

// Updated search function that uses the expanded list
export const searchExpandedCreators = (query: string): Creator[] => {
  if (!query) return expandedCreators;
  
  const lowerQuery = query.toLowerCase();
  return expandedCreators.filter(creator => 
    creator.name.toLowerCase().includes(lowerQuery) ||
    creator.location.toLowerCase().includes(lowerQuery) ||
    creator.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};