export interface RequestHost{
    id:number;
    userID : number;
    request_StateID : number;
    request_State  : string;
    property_Name : string;
    nighly_Price : number;
    description : string;
    nums_Guests : number;
    nums_Beds : number;
    nums_Bathrooms : number;
    nums_Bedrooms : number;
    street : string;
    city : string;
    building_no : number;
    building_name : string;
    district_name  : string;
    location_url : string;
    governateId : number;
    governate  : string;
    placeType_ID : number;
    place_Type : string;
    propetyTypeId : number;
    property_Type: string;
    message: string;
    imageToAddRequestHostDtos : img[];
    attrubutesToAddDto : attrib []
}

export interface img{
    img_URL   : string;
    img_order : number;
}

export interface attrib {
    Id : number ;
    Name : string;
    Icon_Url : string;
}


