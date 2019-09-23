import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { Component } from '@angular/core';

import { User } from '../../user.interface';
import { RemoveUser, EditUser } from '../../actions/user.action';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {

  users$: Observable<User>;

  constructor(private store: Store) {
    this.users$ = this.store.select(state => state.user.users);
  }

  public onRemoveClick(id: number): void {
    this.store.dispatch(new RemoveUser(id));
  }

  public onEditClick(id: number): void {
    this.store.dispatch(new EditUser(id));
  }
}
