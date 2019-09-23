import { Component, OnInit } from '@angular/core';
import { Store, StateContext } from '@ngxs/store';
import { take, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AddUser, EditUser } from '../../actions/user.action';
import { UserStateModel } from '../../state/user.state';
import { User } from '../../user.interface';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.handleEditUser();
  }

  public onSubmit(): void {
    this.addUser();
  }

  private addUser(): void {
    const user = this.formGroup.value;

    this.store.dispatch(new AddUser({name: user.name, lastName: user.lastName}))
      .subscribe(() => this.formGroup.reset());
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  private handleEditUser(): void {
    this.store.select(state => state.user.user).subscribe(this.setValue);
  }

  private setValue = (user: User) => {
    if (!user) {
      return;
    }

    this.formGroup.setValue({name: user.name, lastName: user.lastName});
  }
}
