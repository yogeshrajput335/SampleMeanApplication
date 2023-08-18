import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styles: [
  ]
})
export class ClientListComponent {
  client$: Observable<Client[]> = new Observable();
 
  constructor(private clientService: ClientService) { }
  
  ngOnInit(): void {
    this.fetchclients();
  }
  
  deleteclient(id: string): void {
    this.clientService.deleteClient(id).subscribe({
      next: () => this.fetchclients()
    });
  }
  
  private fetchclients(): void {
    this.client$ = this.clientService.getClients();
  }
}
