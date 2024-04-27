import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CLient } from '../Types/CLient';
import { RequestRent } from '../Types/Request Rent';
import { RequestHost } from '../Types/Request Host';
import { HostAddDto } from '../Types/HostAddDto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private client: HttpClient) {}
 public getById (): Observable<CLient> {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
    return this.client.get<CLient>(
      `https://localhost:7125/api/User/UserInfo`,
      {
        headers:myheaders,
      }
    );
  }
  AcceptByHost(id: number) {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
    return this.client.put(
      `https://localhost:7125/api/User/AcceptRentHost/${id}`,id,
      {
        headers:myheaders,
      }
    );
  }

  RejectByHost(id: number) {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
    return this.client.put(
      `https://localhost:7125/api/User/CancelRentHost/${id}`,id,
      {
        headers:myheaders,
      }
    );
  }

  GetAllRentRequests(): Observable<RequestRent[]> {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)

    return this.client.get<RequestRent[]>(
      'https://localhost:7125/api/User/AllRent',
      {
        headers:myheaders,
      }
    );
  }

  GetAllHostRequests(): Observable<RequestHost[]> {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
    return this.client.get<RequestHost[]>(
      'https://localhost:7125/api/User/AllHost',
      {
        headers:myheaders,
      }
    );
  }
  AcceptRentByAdmin(id: number) {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)

    return this.client.put(
      `https://localhost:7125/api/User/AcceptRentAdmin/${id}`,id,
      {
        headers:myheaders,
      }
    );
  }
  RejectRentByAdmin(id: number) {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
    return this.client.put(
      `https://localhost:7125/api/User/CancelRentAdmin/${id}`,id,
      {
        headers:myheaders,
      }
    );
  }
  AcceptHostByAdmin(id: number) {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
    return this.client.post(`https://localhost:7125/api/User/Add/${id}`,id,
    {
      headers:myheaders,
    });
  }

  RejectHostByAdmin(id: number) {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
    return this.client.put(`https://localhost:7125/api/User/Cancel/${id}`, id,
    {
      headers:myheaders,
    }
    );
  }

  private apiUrl = 'https://localhost:7125/api/User/RequestHost'; 
  submitHostRequest(host:any):Observable<HostAddDto> {
  const myheaders =new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem('token')}`)
  return this.client.post<any>(this.apiUrl,
     host,
     {
      headers:myheaders,
     });
 }
}
