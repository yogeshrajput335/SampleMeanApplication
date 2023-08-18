import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styles: [
  ]
})
export class AddClientComponent {
  constructor(
    private router: Router,
    private clientService: ClientService
  ) { }
  
  addClient(client: Client) {
    this.clientService.createClient(client)
      .subscribe({
        next: () => {
          this.router.navigate(['/clients']);
        },
        error: (error) => {
          alert("Failed to create employee");
          console.error(error);
        }
      });
  }
}
