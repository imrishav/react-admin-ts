import { Permissions } from './Permissions';

export class Role {
	id: number;
	name: string;
	permission: Permissions[];

	constructor(id: number = 0, name: string = '', permission: any[] = []) {
		this.id = id;
		this.name = name;
		this.permission = permission;
	}
}
