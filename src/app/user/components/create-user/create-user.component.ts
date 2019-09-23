import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../user.interface';

import { AddUser, UpdateUser } from '../../actions/user.action';

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
    const user = this.formGroup.value;

    if (user.id) {
      this.updateUser(user);
      return;
    }

    this.addUser(user);
  }

  private addUser(user: User): void {
    this.store.dispatch(new AddUser({
      name: user.name,
      lastName: user.lastName
    })).subscribe(this.resetForm);
  }

  private updateUser(user: User): void {
    this.store.dispatch(new UpdateUser({
      id: user.id,
      name: user.name,
      lastName: user.lastName
    })).subscribe(this.resetForm);
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      id: [''],
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

    this.formGroup.setValue({
      id: user.id,
      name: user.name,
      lastName: user.lastName
    });
  }

  private resetForm = () => this.formGroup.reset();
}
