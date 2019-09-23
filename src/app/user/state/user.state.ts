import { State, Action, StateContext, Selector } from '@ngxs/store';

import { User } from '../user.interface';
import { AddUser, RemoveUser, EditUser } from '../actions/user.action';
import { UserService } from '../user.service';

export class UserStateModel {
  user: User;
  users: User[];
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
      user: null,
      users: [
        {id: 1, name: 'Charleston', lastName: 'Campos'},
        {id: 2, name: 'Gabriel', lastName: 'Barbosa'}
      ]
  },

})
export class UserState {

  constructor(
    private userService: UserService
  ) {}

  @Selector()
  static getUsers(state: UserStateModel): User[] {
    return state.users;
  }

  @Selector()
  static getUser(state: UserStateModel): User {
    return state.user;
  }

  @Action(AddUser)
  add(ctx: StateContext<UserStateModel>, { payload }: AddUser): void {
    const state = ctx.getState();

    ctx.patchState({
      users: [...state.users, this.userService.create(payload)]
    });
  }

  @Action(RemoveUser)
  remove(ctx: StateContext<UserStateModel>, { id }: RemoveUser): void {
    ctx.patchState({users: this.userService.remove(id)});
  }

  @Action(EditUser)
  onEditUser(ctx: StateContext<UserStateModel>, { id }: EditUser): void {
    ctx.patchState({user: this.userService.fetchById(id)});
  }
}
