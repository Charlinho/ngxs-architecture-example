import { User } from '../user.interface';

export class AddUser {
  static readonly type = '[User] Add';

  constructor(public payload: User) {}
}

export class RemoveUser {
  static readonly type = '[User] Remove';

  constructor(public id: number) {}
}

export class EditUser {
  static readonly type = '[User] Edit';

  constructor(public id: number) {}
}
