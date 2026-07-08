import { getPokemonById } from './js-foundation/06-promises.js';
import { buildLogger } from './plugins/logger.plugin.js';
//const { getAge, getuuid } = require('./plugins');
//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
//const { getUserById } = require('./js-foundation/04-arrows');
//const getPokemonById = require('./js-foundation/06-promises');

const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Esto es algo malo');

//getPokemonById(4)
  //  .then((pokemon) => console.log({pokemon}))
    //.catch((err) => console.error('Por favor intente de nuevo'))
    //.finally(() => console.log('Proceso finalizado'));









































// ! Referencia a la function Factory y uso de la misma
/*const { buildMakePerson} = require('./js-foundation/05-factory')

const makePerson = buildMakePerson({ getuuid, getAge });

const obj = {name: 'John', birthdate: '1990-01-01'};

const john = makePerson(obj);

console.log({john});
*/

//console.log(emailTemplate);
/*
const id = 1;

getUserById(id, (error, user) => {
    if (error){
        throw new Error( error );
    }


    console.log(user);
});
*/


