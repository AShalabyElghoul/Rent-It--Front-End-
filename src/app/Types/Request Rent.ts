export interface RequestRent{
   id:number;
   userId : number ;
   userName : string;
   hostId :number;
   hostName :string
   porpertyID : number
   propertyName:string;
   street : string;
   district  : string; 
   city : string;
   checkInDate : Date;
   checkOutDate: Date;
   duration : number;
   requestStateID   :number;
   requestStateset : string;
   nightly_price : number ; 
   service_Fees  : number ;
   total_price :  number;
   message: string;
   property_img : string;
   hostStateID : number;
   adminStateID : number;
}