import { describe, test, expect } from '@jest/globals';
import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory.ts', () => {
    const getuuid = () => '1234';
    const getAge = () => 32;
    
    test('buildMakePerson should return a function', () => {
         
         const makePerson = buildMakePerson({getuuid, getAge});
         expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({getuuid, getAge});
        const OscarLlamuca = makePerson({name: 'Oscar Llamuca', birthdate: '1994-06-02'});
        expect(OscarLlamuca).toEqual({
            id: '1234',
            name: 'Oscar Llamuca',
            birthdate: '1994-06-02',
            age: 32
        });

    });

});