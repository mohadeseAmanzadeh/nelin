import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  public menuDD = [
    { 
      title: 'Menus',
      type: 'lnr-indbox'
    },
    { 
      title: 'Settings',
      type: 'lnr-file-empty'
    },
    {
      title: 'Actions',
      type: 'lnr-book'
    },
  ]
}
