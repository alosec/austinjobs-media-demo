export interface Project {
  id: string;
  title: string;
  type: 'commercial' | 'music-video' | 'documentary' | 'short-film';
  client: string;
  year: number;
  thumbnail: string;
  video_url?: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Austin City Limits 2024',
    type: 'commercial',
    client: 'Austin City Limits Music Festival',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Official promotional video for Austin City Limits 2024, capturing the energy and spirit of Austin\'s premier music festival.',
    tags: ['music', 'festival', 'austin', 'live-event']
  },
  {
    id: '2',
    title: 'Torchy\'s Tacos Brand Story',
    type: 'commercial',
    client: 'Torchy\'s Tacos',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=450&fit=crop',
    description: 'Brand documentary showcasing the Austin roots and damn good tacos philosophy of Torchy\'s Tacos.',
    tags: ['food', 'brand', 'austin', 'documentary-style']
  },
  {
    id: '3',
    title: 'Lady Bird Lake Runners',
    type: 'short-film',
    client: 'Austin Film Society',
    year: 2023,
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'A poetic short film about the runners who circle Lady Bird Lake every morning, exploring themes of routine and community.',
    tags: ['narrative', 'austin', 'community', 'lifestyle']
  },
  {
    id: '4',
    title: 'Whole Foods Market Origins',
    type: 'documentary',
    client: 'Whole Foods Market',
    year: 2023,
    thumbnail: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=450&fit=crop',
    description: 'Documentary exploring the founding of Whole Foods Market in Austin and its impact on natural food retail.',
    tags: ['corporate', 'history', 'austin', 'business']
  },
  {
    id: '5',
    title: 'SXSW 2024 Recap',
    type: 'music-video',
    client: 'South by Southwest',
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=450&fit=crop',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'High-energy recap video capturing the best moments from SXSW 2024, featuring local and international artists.',
    tags: ['music', 'festival', 'austin', 'culture']
  },
  {
    id: '6',
    title: 'Franklin Barbecue Legacy',
    type: 'documentary',
    client: 'Independent',
    year: 2023,
    thumbnail: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=450&fit=crop',
    description: 'Short documentary about Franklin Barbecue and its role in Austin\'s barbecue culture.',
    tags: ['food', 'culture', 'austin', 'tradition']
  }
];

export const projectTypes = [
  { value: 'all', label: 'All Projects' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'music-video', label: 'Music Video' },
  { value: 'documentary', label: 'Documentary' },
  { value: 'short-film', label: 'Short Film' }
];