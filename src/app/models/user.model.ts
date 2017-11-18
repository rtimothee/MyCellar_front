export class UserModel{
	id: number;
	username: string;
	email: string;

	constructor(id, username, email){
		this.id = id;
		this.username = username;
		this.email = email;
	}


	/**
	 * Getter Id
	 *
	 * @return number Id
	 */
	getId(): number {
		return this.id;
	}

	/**
	 * Setter Id
	 *
	 * @param number Id
	 */
	setId(id: number): void {
		this.id = id;
	}


	/**
	 * Getter Username
	 *
	 * @return string Username
	 */
	getUsername() : string {
		return this.username;
	}

	/**
	 * Setter Username
	 *
	 * @param string username
	 */
	setUsername(username: string) : void {
		this.username = username;
	}


	/**
	 * Getter Email
	 *
	 * @return string Email
	 */
	getEmail(): string {
		return this.email;
	}

	/**
	 * Setter Email
	 *
	 * @param string email
	 */
	setEmail(email: string) : void {
		this.email = email;
	}
}
