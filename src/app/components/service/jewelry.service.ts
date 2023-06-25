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

  public save(data : any) {
    return this.http.post<any>(this.jewelryUrl  + "/add", data);
  }

  public getJewelryById(id: number): Observable<any> {
    return this.http.get(`${this.jewelryUrl}/${id}`);
  }

  public deleteJewelryById(id : number): Observable<any> {
    return this.http.delete(`${this.jewelryUrl}/${id}`, { responseType: 'text'});
  }
}
