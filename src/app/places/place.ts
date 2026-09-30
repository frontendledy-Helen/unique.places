export type Place = {
  name: string;
  category: string;
  city: string;
  country: string;
  rating: number;
  priceLevel: number;
  tags: string[];

  badge: string | null;
  shortDescription: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  isPublished: boolean;
};
