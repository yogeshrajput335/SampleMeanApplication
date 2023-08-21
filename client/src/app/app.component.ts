import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
  <div class="card">
    <p-menubar [model]="items"></p-menubar>
  </div>
    <div class="container-md">
   <router-outlet></router-outlet>
 </div>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'client';
  items: MenuItem[] | undefined;
  
  ngOnInit() {
    this.items = [
        {
            label: 'Rahul',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Client',
                    icon: 'pi pi-fw pi-trash',
                    url: 'clients'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Bhargavi',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Teachers',
                    icon: 'pi pi-fw pi-align-left',
                    url: 'teachers'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                }
            ]
        },
        {
            label: 'Akshay',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Common',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Employee',
                    icon: 'pi pi-fw pi-pencil',
                    url: 'employees'
                },
                {
                    label: 'Prime NG',
                    icon: 'pi pi-fw pi-calendar-times',
                    url: 'primeng'
                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];
}
}
