
export interface LinkItem {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  url: string;
  type?: 'large' | 'medium' | 'small' | 'tool' | 'book';
  highlight?: boolean;
  amazonUrl?: string;
  uiclapUrl?: string;
}

export interface Section {
  title: string;
  items: LinkItem[];
}
