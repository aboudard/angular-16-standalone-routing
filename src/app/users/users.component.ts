import { Component, inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, combineLatest, filter, map } from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    standalone: true,
    imports: [
      AsyncPipe
    ],
})
export class UsersComponent {

  filterSubject = new BehaviorSubject<number>(0);
  filter$ = this.filterSubject.asObservable();

  userService = inject(UsersService);
  users$ = this.userService.users$;
  filteredUsers$ = combineLatest([this.users$, this.filter$]);
  constructor() {
    this.userService.setUsers([
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
    ]);
    this.filteredUsers$.subscribe(([users, filter]) => {
      console.log(`users: ${users}, filter: ${filter}`);
    });
  }
  setFilter(filter: number) {
    // set an observable value with filter value
    this.filterSubject.next(filter);
  }
}
