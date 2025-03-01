export interface Article {
  id: string;
  title: string;
  description: string;
  cover: string;
  readCount: number;
  tags: string[];
  publishDate: string;
  isFeatured?: boolean;
} 