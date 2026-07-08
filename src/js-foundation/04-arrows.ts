interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Oscar Llamuca',
    },
    {
        id: 2,
        name: 'Mario Loaiza',
    }
];

const getUserById = (id: number, callback: (err?: string, user?: User) => void) => {
    const user = users.find ((user) => user.id === id);

    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    callback(undefined, user);
}
