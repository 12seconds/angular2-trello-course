import { Component } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { ListAddComponent } from './components/list/list-add.component';
import { List } from './shared/interfaces/List';
import { Todo } from './shared/interfaces/Todo';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  directives: [ListComponent, ListAddComponent],
  template: `
    <div class="row">
      <div class="col-sm-3" *ngFor="let list of lists">
          <my-list [list]="list"></my-list> 
      </div>

      <div class="col-sm-3">
        <add-list (listsUpdate)="listUpdated($event)"></add-list>
      </div>
    </div>
  `
})
export class AppComponent {
  public lists: List[] = [
    { 
      name: 'Next',
      todos: [
        { text: 'do something', done: false },
        { text: 'do other thing', done: false }
      ] 
    },
    {
      name: 'Icebox',
      todos: [
        { text: 'clean the garage', done: false },
        { text: 'clean everything', done: false }
      ]
    }
  ];

  listAdded(event) {
    this.lists.push(event.list);
  }

}
