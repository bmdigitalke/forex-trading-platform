// auth.ts

interface User {
    id: string;
    email: string;
    password: string;
}

class Auth {
    private users: User[] = [];

    register(email: string, password: string): User {
        const newUser: User = { id: this.generateId(), email, password };
        this.users.push(newUser);
        return newUser;
    }

    login(email: string, password: string): User | null {
        const user = this.users.find(user => user.email === email && user.password === password);
        return user || null;
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}

export default new Auth();