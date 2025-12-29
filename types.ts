
export interface LinkItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  url: string;
  type?: 'large' | 'medium' | 'small' | 'tool';
}

export interface Section {
  title: string;
  items: LinkItem[];
}
