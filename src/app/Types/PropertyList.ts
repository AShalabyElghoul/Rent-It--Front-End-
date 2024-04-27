import { Attribute } from "@angular/core";

export interface PropertyList {
    id:number;
    property_Name:string;
    nighly_Price:number;
    description:string;
    nums_Guests:number;
    nums_Beds:number;
    nums_Bathrooms:number;
    nums_Bedrooms:number;
    nums_Web_visitors:number;
    districtName:string;
    governate:string;
    property_Type:string;
    state:string;   
    image:string;
    attributes:Attribute[];

}