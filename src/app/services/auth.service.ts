import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  IsAuthenticated(email:string,password:string)
  {
    let adminUser={email:email,password:password};
    return this.httpClient.post<any>(`https://localhost:7146/api/auth/IsAuthenticated`,adminUser);
  }

}
