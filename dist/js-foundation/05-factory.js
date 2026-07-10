export const buildMakePerson = ({ getAge, getuuid }) => {
    return ({ name, birthdate }) => {
        return {
            id: getuuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
