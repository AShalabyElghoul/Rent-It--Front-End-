import { Property } from './Property';
import { RequestHost } from './Request Host';
import { RequestRent } from './Request Rent';

export interface CLient {
  id: number;
  fname: string;
  lname: string;
  name: string;
  email: string;
  image_URL: string;
  joinedDate: Date;
  start_HostingDate: Date;
  role: string;
  roleId: number;
  requestsRent: RequestRent[];
  requestsRentForMyProps: RequestRent[];
  requestsHost: RequestHost[];
  userProperties: Property[];
  userFavourites: Property[];
}






