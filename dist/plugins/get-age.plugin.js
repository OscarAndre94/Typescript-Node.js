//const getAgePlugin = require('get-age');
export const getAge = (birthdate) => {
    //console.log({currentYear: new Date().getFullYear()});
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
    //if(!birthdate) return new Error('Birthdate is required');
    //return getAge(birthdate);
};
