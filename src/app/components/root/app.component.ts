import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from '../../types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser: User | undefined;

  isUserSelected(id: string): boolean {
    return this.selectedUser?.id === id;
  }

  onSelectUser(id: string): void {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
