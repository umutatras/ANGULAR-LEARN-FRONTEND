import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private httpClient:HttpClient) { }
   apiurl:string="https://localhost:7146/api/helper";
   sendContactEmail(contact:Contact){
    return this.httpClient.post(`${this.apiurl}/SendContactEMail`,contact);
   }

}
