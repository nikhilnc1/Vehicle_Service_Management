import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';
import { Item } from './item';
import { CartItem } from './cart-item';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class VehicleserviceService {
  
  decreaseItemQuantity(itemID: number) {
    throw new Error('Method not implemented.');
  }
  increaseItemQuantity(itemID: number) {
    throw new Error('Method not implemented.');
  }
 
  

  private baseURL = "http://localhost:8081"

  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.httpClient.post(`${this.baseURL}/user/login`, body);
  }
  register(name: string, email: string, password: string, role: string): Observable<any> {
    const body = { name, email, password, role };
    return this.httpClient.post(`${this.baseURL}/user/signup`, body);
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  getUserRole(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('userRole');
    }
    return null;
  }
  

  addVehicle(name: string, year:number, licensePlate:string, ownerName:string, oemail:string ): Observable<any> {
    const body = {name, year, licensePlate, ownerName, oemail}
    return this.httpClient.post(`${this.baseURL}/vehicle/add`, body)
  }

  getVehicleList(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}/vehicle/getByServiceStatus/Pending`);
  }

  getVehicleList2(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}/vehicle/getByServiceStatus/Scheduled`);
  }
  getVehicleList3(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}/vehicle/getByServiceStatus/Completed`);
  }
  deleteVehicle(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/vehicle/delete/${id}`);
  }
  getAdvisorList(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}/user/getAllAdvisorEmails`);
  }
  getVehicleById(id: number): Observable<Vehicle>{
    return this.httpClient.get<Vehicle>(`${this.baseURL}/vehicle/getById/${id}`);
  }

  updateVehicleStatus(id: number, vehicle: Vehicle): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/vehicle/status/${id}`,vehicle);
  }
  
  updateVehicle(id: number, vehicle: Vehicle): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/vehicle/update/${id}`,vehicle);
  }

  getItemList(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseURL}/item/getAll`);
  }

  createItem(item: Item): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/item/add`,item)
  }

  updateItem(id: number, item: Item): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/item/update/${id}`,item);
  } 

  getItemById(id: number): Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseURL}/item/getById/${id}`);
  }

  deleteItem(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/item/delete/${id}`);
  }  

  getVehicleListAsvisor(email: string): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}/advisor/getByAdvisorAndStatus/${email}`);
  }

  addServiceRecord(id:number,itemName:string,itemCost:number, quantity: number, vid: number): Observable<Item[]> {
    const requestBody = { id,itemName,itemCost, quantity, vid };
    console.log(vid)
    return this.httpClient.post<Item[]>(`${this.baseURL}/cart/add`, requestBody);
  }

  updateVehicleStatusAdv(id: number, vehicle: Vehicle): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' 
    });

    return this.httpClient.put(`${this.baseURL}/vehicle/status/bystatus/${id}`, vehicle, { headers });
  }

  getItemsById(id: number): Observable<CartItem[]>{
    return this.httpClient.get<CartItem[]>(`${this.baseURL}/cart/getById/${id}`);
  }


}
