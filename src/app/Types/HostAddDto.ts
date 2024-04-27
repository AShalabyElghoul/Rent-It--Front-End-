export interface HostAddDto {
  Property_Name: string;
  Nighly_Price: number;
  Description: string;
  City: string;
  Location_url: string;
  Nums_Guests:number;
  Nums_Beds: number;
  Nums_Bathrooms: number;
  Nums_Bedrooms: number;
  Street: string;
  Building_no: number;
  Building_name: string;
  District_name: string;
  GovernateId:number;
  PlaceType_ID:number;
  PropetyTypeId:number;
  imgs: File[];
  attrubutesToAddDto:number[];
}

