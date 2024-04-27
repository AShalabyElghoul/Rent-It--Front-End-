import { Attribute } from './Attribute';
import { UserReview } from './UserReview';
// import { Location } from "./Location";

export interface Property {
  id: number;
  property_Name: string;
  nighly_Price: number;
  description: string;
  nums_Guests: number;
  nums_Beds: number;
  nums_Bathrooms: number;
  nums_Bedrooms: number;
  nums_Web_visitors: number;
  placeType: string;
  property_Type: string;
  state: string;
  hostId: number;
  hostName: string;
  host_image: string;
  location: Location;
  images: Image[];
  attrubutes: Attribute[];
  userReviews: UserReview[];
}
export interface Location {
  id: number;
  street: string;
  city: string;
  building_no: number;
  building_name: number;
  district_name: string;
  location_url: string;
  governate: string;
}

export interface Image {
  id: number;
  img_URL: string;
  img_order: number;
}
