import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: `./edit-client.component.html`,
  styles: [
  ]
})
export class EditClientComponent {
  client: BehaviorSubject<Client> = new BehaviorSubject({});
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
  ) { }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }
  
    this.clientService.getClient(id !).subscribe((client) => {
      this.client.next(client);
    });
  }
  
  editClient(client: Client) {
    this.clientService.updateClient(this.client.value._id || '', client)
      .subscribe({
        next: () => {
          this.router.navigate(['/clients']);
        },
        error: (error) => {
          alert('Failed to update client');
          console.error(error);
        }
      })
  }
}
