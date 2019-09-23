import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from './user.service';

import { UserComponent } from './user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserComponent,
    ListUsersComponent,
    CreateUserComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    UserComponent,
    ListUsersComponent,
    CreateUserComponent
  ]
})
export class UserModule {}
