import { Role } from './role';

export class User {
  username: string;
  password: string;
  email: string;
  role: string;

  constructor(username = '', password = '', email = '', role = Role.GUEST) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
  }
}
