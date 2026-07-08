//const { getAge, getuuid } = require('../plugins');
interface BuildMakePersonOptions {
    getuuid: () => string;
    getAge: (birthdate: string) => number;
}

interface Person {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getAge, getuuid }: BuildMakePersonOptions) =>{
    return ({name, birthdate}: Person) => {
 return{
    id: getuuid(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
 }
}

}

