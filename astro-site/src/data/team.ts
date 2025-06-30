export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export const team: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'Director & Co-Founder',
    bio: 'Austin native with 8 years in film production. Started with local music videos and grew into commercial work for major brands. Passionate about storytelling that captures authentic Austin culture.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    specialties: ['Commercial Direction', 'Music Videos', 'Brand Storytelling']
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Cinematographer & Co-Founder',
    bio: 'Film school graduate from UT Austin who stayed for the creative community. Expert in handheld and drone cinematography, with a keen eye for Austin\'s unique lighting and landscapes.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    specialties: ['Cinematography', 'Drone Operations', 'Color Grading']
  },
  {
    name: 'Zoe Thompson',
    role: 'Producer',
    bio: 'Former Austin Film Commission coordinator who knows every location, permit, and crew member in town. Master of logistics and keeping productions on schedule and under budget.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    specialties: ['Production Management', 'Location Scouting', 'Budgeting']
  },
  {
    name: 'Jake Morrison',
    role: 'Editor & Motion Graphics',
    bio: 'Post-production wizard who can make any footage sing. Specializes in music video editing and motion graphics that complement Austin\'s vibrant creative scene.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    specialties: ['Video Editing', 'Motion Graphics', 'Sound Design']
  }
];

export const services = [
  {
    name: 'Commercial Production',
    description: 'Full-service commercial production for brands, from concept to delivery. We specialize in authentic Austin storytelling that resonates with local and national audiences.',
    examples: ['Brand campaigns', 'Product launches', 'Corporate videos', 'Social media content']
  },
  {
    name: 'Music Videos',
    description: 'Creative music videos that capture the energy of Austin\'s incredible music scene. From intimate acoustic sessions to festival-scale productions.',
    examples: ['Narrative music videos', 'Live performance videos', 'Lyric videos', 'Concert documentation']
  },
  {
    name: 'Documentary Work',
    description: 'Compelling documentary storytelling that explores Austin culture, local businesses, and the people who make our city unique.',
    examples: ['Local business profiles', 'Cultural documentaries', 'Event coverage', 'Interview-based content']
  },
  {
    name: 'Event Coverage',
    description: 'Comprehensive event coverage that captures the energy and excitement of Austin\'s festivals, conferences, and special occasions.',
    examples: ['Festival documentation', 'Corporate events', 'Wedding videography', 'Live streaming']
  }
];