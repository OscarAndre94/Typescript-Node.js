const users = [
    {
        id: 1,
        name: 'Oscar Llamuca',
    },
    {
        id: 2,
        name: 'Mario Loaiza',
    }
];
export const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    callback(undefined, user);
};
