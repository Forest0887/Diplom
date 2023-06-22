import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Jewelry} from "../entity/jewelry";

@Injectable({
  providedIn: 'root'
})
export class JewelryService {

  private readonly jewelryUrl: string;
  constructor(private http: HttpClient) {
    this.jewelryUrl = 'http://localhost:8080/jewelry'
  }
  public findAll(): Observable<Jewelry[]> {
    return this.http.get<Jewelry[]>(this.jewelryUrl + "/show-list");
  }

  // public save(jewelry: Jewelry) {
  //   return this.http.post<Jewelry>(this.jewelryUrl, jewelry);
  // }

  public save(data : any) {
    return this.http.post<any>(this.jewelryUrl  + "/add", data);
  }

  // public upload(data : any): Observable<any> {
  //   return this.http.post<any>(this.jewelryUrl, data);
  // }
}
