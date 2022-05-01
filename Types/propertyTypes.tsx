export interface PropertyType {
  coverPhoto: any;
  price: number;
  rentFrequency: string | null;
  rooms: string;
  title: string;
  baths: number;
  area: number;
  agency: any;
  isVerified: boolean;
  externalID: string;
  id: number;
}

export interface ImageScrollTypes {
  externalID: string;

  id: number;

  nimaScore: number;

  orderIndex: number;

  title: null;

  url: string;
}
