import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { User } from './user.interface';

@Injectable()
export class UserService {

  constructor(private store: Store) {}

  public create(payload: User): User {
    return {
      name: payload.name,
      lastName: payload.lastName,
      id: this.userSnapshot().length + 1
    };
  }

  public fetchById(id: number): User {
    return this.userSnapshot().find((user) => user.id === id);
  }

  public remove(id: number): User[] {
    return this.userSnapshot().filter((user) => user.id !== id);
  }

  private userSnapshot(): User[] {
    return this.store.selectSnapshot(state => state.user.users);
  }
}
