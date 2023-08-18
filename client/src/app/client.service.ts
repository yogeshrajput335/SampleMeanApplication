import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = 'http://localhost:5200';
  private client$: Subject<Client[]> = new Subject();
  
  constructor(private httpClient: HttpClient) { }
  
  private refreshClient() {
    this.httpClient.get<Client[]>(`${this.url}/clients`)
      .subscribe(client => {
        this.client$.next(client);
      });
  }
  
  getClients(): Subject<Client[]> {
    this.refreshClient();
    return this.client$;
  }
  
  getClient(id: string): Observable<Client> {
    return this.httpClient.get<Client>(`${this.url}/clients/${id}`);
  }
  
  createClient(client: Client): Observable<string> {
    return this.httpClient.post(`${this.url}/clients`, client, { responseType: 'text' });
  }
  
  updateClient(id: string, client: Client): Observable<string> {
    return this.httpClient.put(`${this.url}/clients/${id}`, client, { responseType: 'text' });
  }
  
  deleteClient(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/clients/${id}`, { responseType: 'text' });
  }
}
