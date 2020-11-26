import { Role } from './Role';

export class User {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	role: Role;
	permissions: string[];

	constructor(
		id: number = 0,
		first_name: string = '',
		last_name: string = '',
		email: string = '',
		role: Role = new Role(),
		permission: any[]
	) {
		this.id = id;
		this.email = email;
		this.first_name = first_name;
		(this.last_name = last_name), (this.role = role);
		this.permissions = permission;
	}
}
