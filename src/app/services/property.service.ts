import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyList } from '../Types/PropertyList';
import { PropertyDetails } from '../Types/PropertyDetails';
import { AddRentDto } from '../Types/AddRentDto';
import { AddReview } from '../Types/AddReview';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private client: HttpClient) {}
  public GetAllProperties(): Observable<PropertyList[]> {
    return this.client.get<PropertyList[]>(
      'https://localhost:7125/api/Property'
    );
  }

  public GetPropertyDetails(id: number): Observable<PropertyDetails> {
    return this.client.get<PropertyDetails>(
      `https://localhost:7125/api/Property/Details/${id}`
    );
  }

  public Rent(id: number, rent: any): Observable<AddRentDto> {
    const myheaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.client.post<any>(
      `https://localhost:7125/api/Property/Rent/${id}`,
      rent,
      {
        headers: myheaders,
      }
    );
  }

  public AddReview(id: number, review: any): Observable<AddReview> {
    const myheaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this.client.post<any>(
      `https://localhost:7125/api/Property/AddReview/${id}`,
      review,
      {
        headers: myheaders,
      }
    );
  }
}
