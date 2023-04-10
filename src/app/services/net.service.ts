import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NetService {

  constructor(private http: HttpClient) { }

  getModels(brandName: string) : Observable<ApiModel[]>{

    const headers = new HttpHeaders({
      'X-Api-Key':'ebV8PLhO2MRIOCPe8W0fAA==xFcAE13SzDG1VhpU'
    });

  const requestOptions = { headers: headers };
    return this.http.get<ApiModel[]>(`https://api.api-ninjas.com/v1/cars?limit=50&make=${brandName}`, requestOptions)
  }
}
