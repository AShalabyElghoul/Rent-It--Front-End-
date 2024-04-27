
export interface PropertyDetails {
  id: number;
  property_Name: string;
  nighly_Price: number;
  description: string;
  nums_Guests: number;
  nums_Beds: number;
  nums_Bathrooms: number;
  nums_Bedrooms: number;
  nums_Web_visitors: number;
  location: Location ;
  placeType: string;
  property_Type: string;
  state: string;
  hostId: number;
  hostName: string;
  host_image: string;
  images: Image[];
  attributes: Attribute[];
  userReviews: UserReviews[];
}
export interface Attribute {
    id: number;
    name: string;
    icon_Url: string;
  }
export interface Image {
    id: number;
    img_URL: string;
    img_order: number;
  }


export interface UserReviews {
  client_Name: string;
  review: string;
  img_Url: string;
}
