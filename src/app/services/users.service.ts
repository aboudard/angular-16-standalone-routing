import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // BehaviorSubject holding the users
  readonly #usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.#usersSubject.asObservable();

  setUsers(users: User[]) {
    this.#usersSubject.next(users);
  }


}
